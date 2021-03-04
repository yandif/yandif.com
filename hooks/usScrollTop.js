import { useState, useEffect } from "react";

/**
 *  获取文档高度
 * @param number height  滚动多少开始显示
 */
export default function useScrollTo(height) {
  const [isHidden, setIsHidden] = useState(true);
  const fn = () => {
    if (document.documentElement.scrollTop + document.body.scrollTop > height) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fn);
    return () => {
      window.removeEventListener("scroll", fn);
    };
  });
  return isHidden;
}
