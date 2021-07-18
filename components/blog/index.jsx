import React, { useState } from "react";
import Layout from "./components/Layout";
import className from "./index.module.css";

export default function Blog() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return <Layout sider={"123"} main={"哈哈".repeat(10000)} />;
  return (
    <div className={className.blog}>
      <div
        className="sidebar-switch"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </div>
      <nav className={isSidebarOpen ? "sidebar-open" : "sidebar-close"}>
        <div className="article-list"></div>
      </nav>
      <main className={isSidebarOpen ? "main-open" : ""}>
        <div className="article">{"哈哈".repeat(10000)}</div>
      </main>
      <style jsx>{`
        body {
          background-color: #fafafa;
          font-family: "Courier New", Courier, monospace;
        }


        .article-list {
          position: absolute;
          width: 258px;
          left: 170px;
          height: 100%;
        }




        .article {
          margin: 40px;
          background: red;
          width: 800px;
        }
        .article p {
          display: block;
        }
      `}</style>
    </div>
  );
}
