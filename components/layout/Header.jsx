import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [menuSwitch, setMenuSwitch] = useState(true);

  return (
    <>
      <header className="bg-white select-none shadow">
        {/* PC端 */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            {/*  */}
            <div className="flex">
              {/*  */}
              <div className=" flex items-center  py-4 px-4 md:px-0 mr-32">
                <span className="font-bold text-2xl">Yandif</span>
              </div>
              {/*  */}
              <nav className="hidden pl-5 md:flex  items-center space-x-1">
                <Menu></Menu>
              </nav>
            </div>

            {/* 搜索框 */}
            <div className="hidden md:block pt-1">
              <Search></Search>
            </div>
            {/* 搜索框 */}

            {/* 下拉菜单开关 */}
            <div className="md:hidden flex items-center px-5">
              <button
                onClick={() => {
                  setMenuSwitch(!menuSwitch);
                }}
                onDoubleClick={() => {
                  console.log(1);
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
            {/* 下拉菜单开关 */}
          </div>
        </div>

        {/* 下拉菜单 */}
        <div
          className={
            menuSwitch ? " hidden" : "md:hidden max-w-sm m-auto  shadow-sm "
          }
        >
          <div>
            <Search />
          </div>
          <nav className=" flex flex-col items-center ">
            <Menu></Menu>
          </nav>
        </div>
        {/* 下拉菜单 */}
      </header>
    </>
  );
}

function Search() {
  return (
    <div className="flex items-center">
      <input
        className=" focus:outline-none w-3/4  bg-gray-50   h-10 px-5 my-3 lg:my-0 text-lg "
        placeholder="搜索..."
      />
      <button className="focus:outline-none  w-1/4 bg-gray-50   text-center  h-10 my-2 text-xl px-2 ">
        <img
          className="w-6 lg:w-6 block m-auto"
          src="/images/ui/search.webp"
          alt="搜索"
        />
      </button>
    </div>
  );
}

function Menu() {
  let menus = [
    {
      title: "首页",
      path: "/",
    },
    {
      title: "分类",
      path: "/categories",
    },
    {
      title: "标签",
      path: "/tags",
    },
    {
      title: "归档",
      path: "/archives",
    },
    {
      title: "关于",
      path: "/about",
    },
  ];

  menus.map((v) => {
    v.regexp = RegExp("^" + v.path + "$", "i");
    return v;
  });
  const path = useRouter().asPath;

  return (
    <>
      {menus.map((menu) => {
        return (
          <div key={menu.path} className="mb-4 md:m-0">
            <Link href={menu.path}>
              <a
                className={
                  menu.regexp.test(path)
                    ? "py-5 lg:px-6 text-lg md:px-1  font-bold"
                    : "py-5 lg:px-6 text-lg md:px-1 text-gray-500 hover:text-black"
                }
              >
                {menu.title}
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
}
