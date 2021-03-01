import { useState, useEffect, useRef } from "react";

export default function Item({
  item,
  color,
  workingState,
  state,
  collection,
  setState,
  index,
}) {
  const [showItem, setShowItem] = useState(true);
  const input = useRef(null);
  useEffect(() => {
    if (!showItem) {
      input.current.focus();
    }
  });

  function editItem(e) {
    const name = e.target.value;

    if (name) {
      collection.items[index].name = name;
    } else {
      collection.items.splice(index, 1);
    }
    setState(Object.assign({}, state));
    setShowItem(!showItem);
  }

  return (
    <>
      {showItem ? (
        <div className="item">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowItem(!showItem);
            }}
            className="item-name"
          >
            {item.name}
          </div>
          <div
            className="item-state"
            style={{
              color: color[workingState.indexOf(item.state)],
            }}
          >
            {item.state}
          </div>
        </div>
      ) : (
        <div className="item-input">
          <input
            ref={input}
            defaultValue={item.name}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                editItem(e);
              }
            }}
            onBlur={() => {
              setShowItem(!showItem);
            }}
            placeholder="删除？"
          />
        </div>
      )}
      <style jsx>{`
        .item {
          height: 35px;
          margin-bottom: 1px;
          overflow: hidden;
          cursor: pointer;
          background: #eeeeee;
          border-radius: 5px;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

          break-inside: avoid;
        }
        .item:hover {
          background: #ffffff;
        }
        .item:hover .item-state {
          opacity: 1;

          transition: opacity 0.3s ease 0.1s;
        }
        .item-name {
          float: left;
          height: 35px;
          padding: 0 15px;

          font-size: 14px;
          line-height: 35px;
          color: var(--fg-high);

          background: transparent;
          cursor: text;
        }
        .item-state {
          float: right;
          height: 35px;
          padding: 0 15px;

          font-size: 14px;
          line-height: 35px;

          opacity: 0.6;

          transition: opacity 1s;
        }

        .item-input input {
          width: 100%;
          height: 36px;

          font-size: 14px;
          line-height: 36px;
          color: var(--fg-high);
          text-indent: 15px;

          background: var(--bg-med);
          border: 0;
          border-radius: 5px;
          outline-style: none;
        }
      `}</style>
    </>
  );
}
