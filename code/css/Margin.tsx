import { Box } from '@mantine/core';
import styles from './Margin.module.css';

const Block = ({ children }: { children?: React.ReactNode }) => {
  return <Box className={styles.block}>{children || 'block'}</Box>;
};

export const Margin = () => {

  return (
    <>
      <Block key="123">
        <Block></Block>
        <Block></Block>
      </Block>
      <Block></Block>
    </>
  );
};
