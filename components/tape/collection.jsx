import { useState, useEffect, useRef } from "react";
import Item from "./item";
export default function Collection({ state, setState, collection }) {
  const [showTop, setShowTop] = useState(true);
  const [showAdd, setShowAdd] = useState(true);
  const [showOverAdd, setShowOverAdd] = useState(false);

  const titleInput = useRef();
  const addInput = useRef();
  let colors = [0, 0, 0, 0, 0, 0],
    color = ["", "#e6414a", "#daa320", "#a43a8f", "#eb88b0", "#5a9b8f"],
    workingState = ["", "优先", "工作中", "已批准", "已提交", "已完成"],
    count;
  color_done();
  function color_done() {
    colors = [0, 0, 0, 0, 0, 0];
    collection.items.map((v) => {
      colors[workingState.indexOf(v.state)] += 1;
    });
    count = colors;
    if (collection.items.length > 0) {
      colors = colors.map((v) => {
        return (v * 10000) / collection.items.length / 100 + "%";
      });
    }
  }

  useEffect(() => {
    if (!showTop) {
      titleInput.current.focus();
    }
    if (!showAdd) {
      addInput.current.focus();
    }
  });
  let index = 0;
  state.collections.map((v, i) => {
    if (v.date == collection.date) {
      index = i;
    }
  });
  function topSubmit(el) {
    const name = el.target.value;

    if (name) {
      state.collections[index].name = name;
    } else {
      state.collections.splice(index, 1);
    }
    setState(Object.assign({}, state));
    setShowTop(!showTop);
  }

  function saveShowItems() {
    collection.showItems = !collection.showItems;
    setState(Object.assign({}, state));
  }

  function addItem(e) {
    let name = e.target.value;
    let id = new Date().getTime();
    if (name !== "") {
      state.collections[index].items.push({ name, id, state: "" });
    }
    setState(Object.assign({}, state));
    setShowAdd(!showAdd);
  }

  function changeState(i) {
    const item = collection.items[i];
    const current = workingState.indexOf(item.state);
    let str = "";
    if (current + 1 >= workingState.length) {
      str = workingState[0];
    } else {
      str = workingState[current + 1];
    }
    collection.items[i].state = str;
    setState(Object.assign({}, state));
    color_done();
  }
  return (
    <div className="collection">
      <div className="top">
        {showTop ? (
          <div
            className="title"
            onClick={(e) => {
              e.stopPropagation();
              saveShowItems();
            }}
          >
            <span
              onClick={(e) => {
                e.stopPropagation();
                setShowTop(!showTop);
              }}
            >
              {collection.name}
            </span>
          </div>
        ) : (
          <div v-show="state.editTitle">
            <input
              ref={titleInput}
              defaultValue={collection.name}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  topSubmit(e);
                }
              }}
              onBlur={() => {
                setShowTop(true);
              }}
              placeholder="删除?"
            />
          </div>
        )}
      </div>
      {collection.items.length > 0 ? (
        <div className="color">
          {colors.map((v, i) => {
            return (
              <div
                key={i}
                style={{ width: v, background: color[i] }}
                className="color-item"
              >
                <span>{count[i]}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      <div
        className="items"
        style={
          collection.showItems
            ? { height: collection.items.length * 36 + "px", opacity: "1" }
            : { height: "0px", opacity: "0" }
        }
      >
        {collection.showItems ? (
          <>
            {collection.items.map((v, i) => {
              return (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeState(i);
                  }}
                >
                  <Item
                    item={v}
                    color={color}
                    workingState={workingState}
                    setState={setState}
                    state={state}
                    collection={collection}
                    index={i}
                  />{" "}
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
      <div
        className="add"
        onMouseEnter={() => {
          setShowOverAdd(true);
        }}
        onMouseLeave={() => {
          setShowOverAdd(false);
        }}
        style={
          showOverAdd || !showAdd ? { height: "35px" } : { height: "15px" }
        }
        onClick={(e) => {
          e.stopPropagation();
          setShowAdd(!showAdd);
        }}
      >
        {showAdd ? (
          <div className="add-title">添加项目</div>
        ) : (
          <div>
            <input
              ref={addInput}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  addItem(e);
                }
              }}
              onBlur={() => {
                setShowAdd(!showAdd);
              }}
              placeholder="名称"
              type="text"
            />
          </div>
        )}
      </div>
      <div className="detail">
        <span>{collection.items.length} 项目</span>
      </div>
      <style jsx>{`
        .collection {
          padding: 5px;

          border-radius: 15px;
        }
        .top {
          height: 35px;
          margin-bottom: 1px;

          background: var(--bg-low);
          border-radius: 15px 15px 5px 5px;
        }
        .top input {
          width: 100%;
          height: 36px;

          font-size: 14px;
          line-height: 36px;
          color: var(--fg-high);
          text-indent: 15px;

          background: var(--bg-low);
          border: 0;
          border-radius: 5px;
          outline-style: none;
        }

        .title {
          height: 35px;
          cursor: pointer;
          font-size: 14px;
          line-height: 35px;
          text-align: center;
        }
        .title span {
          cursor: text;
        }

        .color {
          height: 5px;
          margin-bottom: 1px;
          overflow: hidden;

          background: var(--bg-color);
          border-radius: 5px;
          box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);

          transition: all 0.3s ease;
        }
        .color:hover {
          height: 35px;

          transition: all 0.3s ease;
        }
        .color > div {
          display: inline-block;
          overflow: hidden;

          line-height: 35px;
        }
        .color > div > span {
          margin-left: 10px;
        }
        .color-item {
          height: 35px;
        }

        .items {
          overflow: hidden;

          transition: all 0.2s;

          break-inside: avoid;
        }

        .add {
          position: relative;

          height: 15px;
          margin-bottom: 1px;

          font-size: 14px;
          line-height: 20px;
          text-align: center;

          background: var(--bg-med);
          border-radius: 5px;
          box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);

          cursor: pointer;
          transition: all 0.1s ease;
        }

        .add-title {
          color: transparent;
        }
        .add-title:hover {
          color: var(--fg-color-text);
        }
        .add:hover {
          height: 35px;

          line-height: 35px;

          opacity: 1;

          transition: all 0.1s ease;
        }
        .add div {
          width: 100%;

          border-radius: 5px;
        }
        .add div input {
          width: 100%;
          height: 35px;

          font-weight: 700;
          font-size: 16px;
          text-indent: 20px;

          background: var(--bg-med);
          border: 0;
          border-radius: 5px;
          outline-style: none;
        }

        .detail {
          height: 35px;
          height: 35px;
          margin-top: 1px;
          padding-left: 10px;

          font-size: 14px;
          line-height: 35px;

          background: var(--bg-low);
          border-radius: 5px 5px 15px 15px;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

          transition: color 1s;
        }
        .detail span {
          color: var(--fg-low);

          transition: color 1s;
        }
        .detail span:hover {
          color: var(--fg-high);

          transition: color 0.3s;
        }
      `}</style>
    </div>
  );
}
