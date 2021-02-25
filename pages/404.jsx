import Link from "next/link";
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="text-3xl"> 404 - Page Not Found</div>

      <Link href="/">
        <a className="text-lg m-5">返回首页</a>
      </Link>
    </div>
  );
}
