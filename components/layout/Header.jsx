import Link from "next/link";
import { useState } from "react";

export default function Header() {
  let menus = [
    {
      title: "首页",
      path: "/",
    },
    {
      title: "分类",
      path: "/categories/",

      submenus: [
        {
          title: "技术",
          path: "/category/技术/",
        },
        {
          title: "杂论",
          path: "/category/杂论/",
        },
        {
          title: "转载",
          path: "/category/转载/",
        },
      ],
    },
    {
      title: "归档",
      path: "/archives/",
    },
    {
      title: "留言版",
      path: "/comment/",
    },
    {
      title: "友人帐",
      path: "/links/",
    },
    {
      title: "关于",
      path: "/about",
    },
  ];

  const [menuSwitch, setMenuSwitch] = useState(true);

  return (
    <>
      <header className="bg-gray-200 shadow-md">
        {/* PC端 */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            {/*  */}
            <div className="flex">
              {/*  */}
              <div className="flex items-center md:py-auto py-4 px-4 md:px-0 mr-32">
                <Link href="/">
                  <a className=" font-bold text-2xl ">Yandif</a>
                </Link>
              </div>
              {/*  */}
              <div className="hidden pl-5 md:flex items-center space-x-1">
                {menus.map((menu) => {
                  return (
                    <div key={menu.path}>
                      <Link href={menu.path}>
                        <a className="py-5 px-4 text-lg   hover:text-yellow-600 hover:border-yellow-600 hover:border-b-3">
                          {menu.title}
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
              {/*  */}
            </div>
            {/*  */}
            <div className="hidden md:flex items-center space-x-1">
              <input
                className=" focus:outline-none 
           w-3/4 shadow-md  h-10 px-5 my-3 lg:my-0 text-lg text-black"
                placeholder="搜索..."
              />
              <button
                className=" w-1/4 bg-gray-100 min-w-0 text-center px-2 
          h-10 shadow-md my-2 text-xl hover:bg-gray-300 focus:outline-none "
              >
                <img
                  className="w-6 lg:w-6 block m-auto"
                  src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
                  alt=""
                />
              </button>
            </div>
            {/*  */}
            <div className="md:hidden flex items-center px-5">
              <button
                onClick={() => {
                  setMenuSwitch(!menuSwitch);
                }}
                type="button"
                className="block flex-grow text-black lg:hidden hover:text-gray-800 focus:text-black focus:outline-none"
              >
                <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
            {/*  */}
          </div>
        </div>
        {/* 手机端 */}
        <div
          className="mobile-menu  md:hidden"
          className={menuSwitch ? "hidden" : ""}
        >
          <div className="hidden md:flex items-center space-x-1">
            <input
              className=" focus:outline-none 
           w-3/4 shadow-md  h-10 px-5 my-3 lg:my-0 text-lg text-black"
              placeholder="搜索..."
            />
            <button
              className=" w-1/4 bg-gray-100 min-w-0 text-center px-2 
          h-10 shadow-md my-2 text-xl hover:bg-gray-300 focus:outline-none "
            >
              <img
                className="w-6 lg:w-6 block m-auto"
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
                alt=""
              />
            </button>
          </div>

          <div className="hidden pl-5 md:flex items-center space-x-1">
            {menus.map((menu) => {
              return (
                <div key={menu.path}>
                  <Link href={menu.path}>
                    <a className="py-5 px-4 text-lg   hover:text-yellow-600 hover:border-yellow-600 hover:border-b-3">
                      {menu.title}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
