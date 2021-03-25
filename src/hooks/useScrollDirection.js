import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [isDown, setIsDown] = useState(false);

  function bindScroll(event) {
    // 滚动的高度
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight =
      (event.srcElement && event.srcElement.documentElement.clientHeight) ||
      document.body.clientHeight;
    // 页面高度
    const scrollHeight =
      (event.srcElement && event.srcElement.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    // 距离页面底部的高度
    const height = scrollHeight - scrollTop - clientHeight;
    // 判断距离页面底部的高度
    setIsDown(height <= 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", bindScroll);
    return function cleanup() {
      window.removeEventListener("scroll", bindScroll);
    };
  });

  return isDown;
}
