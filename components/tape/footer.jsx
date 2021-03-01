import Link from "next/link";
export default function Footer({ state, setState }) {
  const themes = ["theme-default", "theme-test"];
  let current =
    themes.indexOf(state.theme) < 0 ? 0 : themes.indexOf(state.theme);
  function changeTheme() {
    current = current + 1;
    if (current > themes.length - 1) {
      current = 0;
    }
    setState(
      Object.assign({}, state, {
        theme: themes[current],
      })
    );
  }
  return (
    <footer>
      <div className="logo">
        <h1 onClick={changeTheme}>Tape</h1>
      </div>
      <Link href="/">
        <a className="back-Home">返回首页</a>
      </Link>
      <style jsx>{`
        footer {
          position: fixed;
          bottom: 0;

          width: 100%;
          padding: 10px;
        }
        .logo {
          float: left;
          font-size: 26px;
          color: var(--color-logo);
          font-weight: bold;
          cursor: pointer;
        }
        .back-Home {
          float: left;
          font-size: 8px;
          margin-left: 10px;
          margin-top: 10px;
          font-weight: 600;
        }
      `}</style>
    </footer>
  );
}
