import { Box, Button, Input, NumberInput, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
type Status = 'work' | 'release';

export function Eyes() {
  const [work, setWork] = useState(20);
  const [release, setRelease] = useState(0.5);
  const [start, setStart] = useState(false);
  const [status, setStatus] = useState<Status>('work');

  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  });

  const showNotification = (title, message) => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
      });
    }
  };
  const handleWorkEnd = () => {
    showNotification('工作结束', '休息一会儿');
    setStatus('release');
  };
  const handleReleaseEnd = () => {
    showNotification('休息结束', '工作一会儿');
    setStatus('work');
  };

  const handleStart = () => {
    setStart(true);
    setStatus('work');
  };

  const handleStop = () => {
    setStart(false);
  };

  return (
    <Box m="lg">
      {!start ? (
        <Box m="md">
          <Input.Wrapper label="用眼（分钟）">
            <NumberInput
              value={work}
              onChange={(v) => {
                setWork(Number(v));
              }}
            />
          </Input.Wrapper>
          <Input.Wrapper label="休息（分钟）">
            <NumberInput
              value={release}
              onChange={(v) => {
                setRelease(Number(v));
              }}
            />
          </Input.Wrapper>
        </Box>
      ) : status === 'work' ? (
        <CountdownTimer
          key="work"
          targetDate={new Date().getTime() + work * 60 * 1000}
          onFinish={handleWorkEnd}
        />
      ) : (
        <CountdownTimer
          key="release"
          targetDate={new Date().getTime() + release * 60 * 1000}
          onFinish={handleReleaseEnd}
        />
      )}

      {!start ? (
        <Button variant="outline" onClick={handleStart}>
          开始
        </Button>
      ) : (
        <Button variant="outline" onClick={handleStop}>
          结束
        </Button>
      )}
    </Box>
  );
}

const CountdownTimer = ({ targetDate, onFinish }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        天: Math.floor(difference / (1000 * 60 * 60 * 24)),
        小时: Math.floor((difference / (1000 * 60 * 60)) % 24),
        分: Math.floor((difference / 1000 / 60) % 60),
        秒: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Text fz={'lg'} fw="bold" component="span" key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </Text>,
    );
  });

  return (
    <Box m="md">{timerComponents.length ? timerComponents : onFinish()}</Box>
  );
};
