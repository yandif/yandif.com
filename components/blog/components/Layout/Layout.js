import { HamburgerButton } from "@icon-park/react";
import { useState } from "react";
import useMedia from "use-media";
import className from "./Layout.module.css";

export default function Layout({
  sider,
  main,
  siderStyle = { width: "540px" },
  mainStyle = {},
}) {
  const [close, setClose] = useState(false);
  const isWide = useMedia({ minWidth: 1000 });
  const mainContainerStyle = {
    marginLeft: isWide && !close ? siderStyle.width : 0,
  };
  siderStyle = Object.assign(siderStyle, {
    marginLeft: close ? `-${siderStyle.width}` : 0,
  });
  return (
    <div className={className.layout}>
      <div className={className.switch} onClick={() => setClose(!close)}>
        <HamburgerButton theme="outline" size="36" fill="#333" />
      </div>
      <div className={className.sider} style={siderStyle}>
        {sider}
      </div>
      <div className={className.mainContainer} style={mainContainerStyle}>
        <div className={className.main} style={mainStyle}>
          {main}
        </div>
      </div>
    </div>
  );
}
