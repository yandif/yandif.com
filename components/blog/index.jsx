import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import Sider from "./components/Sider/Sider";
import Main from "./components/Main/Main";

export default function Blog() {
  return <Layout sider={<Sider />} main={<Main />} />;
}
