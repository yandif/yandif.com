import React from "react";
import className from "./Sider.module.css";
import Tree from "./Tree/Tree";
export default function Sider({ cards, menus }) {
  cards = [
    "你好".repeat(100),
    "哈".repeat(100),
    undefined,
    undefined,
    undefined,
  ];

  menus = [
    {
      name: "1",
      children: [
        {
          name: "1-1",
          children: [],
        },
      ],
    },
    {
      name: "2",
      children: [],
    },
  ];

  const Menu = function () {
    return (
      <div className={className.menu}>
        {menus.map((menu, i) => (
          <Tree key={i} data={menu} />
        ))}
      </div>
    );
  };

  const card = cards.map((text, i) => (
    <div
      key={i}
      className={className.card}
      style={{ background: text ? "#fff" : "#e8e8e9" }}
    >
      <div className={className.cardContent}>{text}</div>
    </div>
  ));

  return (
    <div className={className.sider}>
      <div className={className.menuList}>
        <Menu />
      </div>
      <div className={className.cardList}>{card}</div>
    </div>
  );
}
