import { useState, useEffect } from "react";

export default function useScrollTo() {
  const [isHidden, setIsHidden] = useState(true);
  const fn = () => {
    if (document.documentElement.scrollTop + document.body.scrollTop > 800) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fn);
    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, [1]);
  return isHidden;
}
