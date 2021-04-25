import React, { useState } from "react";
export default function Editor() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div
        className="sidebar-switch "
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </div>
      <nav className={isSidebarOpen ? "sidebar-open" : "sidebar-close"}>
        <div className="article-list"></div>
      </nav>
      <main className={isSidebarOpen ? "main-open" : ""}>
        <div className="article">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis, cumque temporibus ad natus laboriosam, itaque
            quibusdam consequuntur quidem aperiam, nam ipsum magnam nisi earum
            provident pariatur debitis eos!
          </p>
        </div>
      </main>
      <style jsx>{`
        body {
          background-color: #fafafa;
          font-family: "Courier New", Courier, monospace;
        }
        .sidebar-switch {
          z-index: 2;
          position: fixed;
          top: 12px;
          left: 20px;
          font-size: 30px;
          cursor: pointer;
        }
        nav {
          height: 100%;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          width: 428px;
          background-color: #e1e2e3;
          overflow-x: hidden;
          transition: 0.5s;
        }

        .article-list {
          position: absolute;
          width: 258px;
          left: 170px;
          height: 100%;
        }

        .sidebar-open {
          margin-left: 0px;
        }
        .sidebar-close {
          margin-left: -428px;
        }

        .main-open {
          margin-left: 0px;
        }
        @media screen and (min-width: 1000px) {
          .main-open {
            margin-left: 428px;
          }
        }

        main {
          transition: margin-left 0.5s;
          padding: 20px;

          display: flex;
          justify-content: center;
        }
        .article {
          margin: 40px;

          width: 800px;
        }
        .article p {
          display: block;
        }
      `}</style>
    </>
  );
}
