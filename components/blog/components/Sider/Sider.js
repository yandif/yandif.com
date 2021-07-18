import className from "./Sider.module.css";
export default function Sider() {
  return (
    <div className={className.sider}>
      <div className={className.menu}>123</div>
      <div className={className.cardList}>
        {[
          1,
          2,
          `是前端定位还没真正定型。前端不就是web前端吗，有什么定位问题呢？我们可以回顾下几年前的前端在整个工作流程中的职责范围，再对比下现在前端的工作范围，是不是有了非常大的变化？可以说现在也仍然在变化中，对于即将面向市场选拔的前端程序员其实也是有很多方向可以选择的，例如H5游戏方法，web方向等。假如你决定投身到H5游戏领域，那就要涉及到canvas，引擎以及优化算法，甚至3D的基础理论知识都要掌握。假如你走web方向，现在市场越来越中意前端向“中端”发展的程序员。`,
          "123 ".repeat(100),
          undefined,
        ].map((v) => (
          <Card>{v}</Card>
        ))}
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      className={className.card}
      style={{ background: children ? "#fff" : "#e8e8e9" }}
    >
      <div className={className.cardContent}>{children}</div>
    </div>
  );
}
