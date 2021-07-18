import className from "./Sider.module.css";
export default function Sider() {
  return (
    <div className={className.sider}>
      <div className={className.menu}>123</div>
      <div className={className.cardList}>
        {[1, 2, 3, 5].map((v) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

function Card() {
  return <div className={className.card}>123</div>;
}
