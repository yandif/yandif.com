import React, { useState } from "react";
import className from "./Tree.module.css";
import Icon from "../../Icon/Icon";

export default function Tree({ data, deep = 0, isOpen = true }) {
  const { name, children } = data;
  const hasChildren = Array.isArray(children) && children?.length > 0;

  const [open, setOpen] = useState(isOpen);

  return (
    <React.Fragment>
      <div className={className.namebox}>
        <div
          className={className.name}
          style={{
            paddingLeft: `${deep * 20 + 15}px`,
          }}
        >
          {hasChildren && (
            <span className={className.toggler}>
              <Icon
                type="三角形"
                onClick={() => setOpen(!open)}
                style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
              />
            </span>
          )}
          {name}
        </div>
      </div>

      {hasChildren && (
        <div
          className={className.treebox}
          style={{
            display: open ? "block" : "none",
          }}
        >
          {children.map((menu) => (
            <Tree data={menu} deep={deep + 1} isOpen={open} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
