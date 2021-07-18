import className from "./Sider.module.css";
export default function Sider() {
  return (
    <div className={className.sider}>
      <div className={className.menu}>123</div>
      <div className={className.cardList}>
        {[
          "你好".repeat(100),
          "哈".repeat(100),
          undefined,
          undefined,
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
