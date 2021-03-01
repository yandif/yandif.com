import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Collection from "./collection";

export default function Tape() {
  const [state, setState] = useState({
    theme: "theme-default",
    collections: [],
  });

  let [load, setLoad] = useState(false);
  useEffect(() => {
    //加载本地数据
    if (!load) {
      if (localStorage.getItem("tape-first") == null) {
        localStorage.setItem(
          "tape",
          JSON.stringify({
            theme: "theme-default",
            collections: [
              {
                name: "使用说明",
                items: [
                  {
                    name: "点击最上方灰色区域新建集合",
                    id: 1614564559319,
                    state: "",
                  },
                  {
                    name: "点击上方空白处隐藏项目",
                    id: 1614564559329,
                    state: "优先",
                  },

                  {
                    name: "点击使用说明修改标题",
                    id: 1614564595031,
                    state: "工作中",
                  },
                  {
                    name: "点击右侧空白处修改状态",
                    id: 1614564642792,
                    state: "已批准",
                  },
                  {
                    name: "点击我修改名称",
                    id: 1614564674397,
                    state: "已提交",
                  },
                  {
                    name: "修改时清空文字可以删除项目",
                    id: 1614564753614,
                    state: "已完成",
                  },
                  {
                    name: "点击 Tape 可切换主题",
                    id: 1614564753714,
                    state: "已完成",
                  },
                ],
                date: 1614563099096,
                showItems: true,
              },
              {
                showItems: false,
                name: "项目说明",
                items: [
                  {
                    name: "本项目使用 React 和 Next.js 构建",
                    id: 1614565364572,
                    state: "已完成",
                  },
                  {
                    name: "本项目暂时把数据存储在本地",
                    id: 1614565364578,
                    state: "已完成",
                  },
                  {
                    name: "本项目是仿照 Tape 制作的网页端",
                    id: 1614565391901,
                    state: "优先",
                  },
                  {
                    name: "喜欢的话可以去支持一下原作者",
                    id: 1614565557147,
                    state: "",
                  },
                  {
                    name: "网址：https://aeriform.itch.io/tape",
                    id: 1614565579324,
                    state: "优先",
                  },
                ],
                date: 1614564773762,
              },
            ],
          })
        );
        localStorage.setItem("tape-first", "true");
      }
      let localData = JSON.parse(window.localStorage.getItem("tape"));
      if (localData != null) {
        setState(localData);
      }

      setLoad(true);
    }
    localStorage.setItem("tape", JSON.stringify(state));
  });

  return (
    <div id="tape" className={state.theme}>
      <Header state={state} setState={setState} />
      <div className="waterfalls">
        {state.collections.map((item) => {
          return (
            <div key={item.date} className="box">
              <Collection state={state} setState={setState} collection={item} />
            </div>
          );
        })}
      </div>

      <div className="total-collection">
        <span>{state.collections.length} 集合</span>
      </div>
      <Footer state={state} setState={setState} />
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: color 0.5s ease, background-color 0.5s ease，;
          user-select: none;
        }

        .theme-default {
          --header-top: 15px;
          --header-collention-top: 15px;
          --bg-color: #e1e1e1;
          --fg-high: #030202;
          --fg-med: #999999;
          --fg-low: #bbbcbb;
          --fg-inv: #545454;
          --bg-high: #545454;
          --bg-med: #ced0ce;
          --bg-low: #f5f5f5;
          --bg-inv: #ed2c3e;
          --color-logo: #ed2c3e;
        }

        .theme-test {
          --header-top: 20px;
          --header-collention-top: 20px;
          --bg-color: rgb(231, 231, 143);
          --fg-high: #545454;
          --fg-med: #e0d6d6;
          --fg-low: #bbbcbb;
          --fg-inv: #545454;
          --bg-high: #545454;
          --bg-med: #ced0ce;
          --bg-low: #f5f5f5;
          --bg-inv: #ed2c3e;
          --color-logo: #000;
        }

        #tape {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;

          height: 100%;
          overflow-y: scroll;
          background-color: var(--bg-color);
          -ms-overflow-style: none;
        }

        #tape::-webkit-scrollbar {
          display: none;
        }

        .waterfalls {
          position: relative;

          margin: 10px 10px;

          columns: 450px 3;
        }

        .box {
          padding-top: 5px;
          padding-bottom: 5px;

          transition: all 1s;

          break-inside: avoid;
        }
        .total-collection span {
          padding: 15px;

          color: var(--fg-low);
        }
      `}</style>
    </div>
  );
}
