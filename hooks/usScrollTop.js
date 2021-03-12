import { useState, useEffect } from "react";

/**
 *  获取文档滚动多少
 * @param number height  滚动多少开始显示
 */
export default function useScrollTo(height) {
  const [flag, setFlag] = useState(true);
  const fn = () => {
    if (document.documentElement.scrollTop + document.body.scrollTop > height) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fn);
    return () => {
      window.removeEventListener("scroll", fn);
    };
  });
  return flag;
}
