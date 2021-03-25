import { useState, useEffect, useRef } from "react";
export default function Header({ state, setState }) {
  const [isShow, setIsShow] = useState(false);
  const inputEl = useRef(null);
  useEffect(() => {
    if (isShow) {
      inputEl.current.focus();
    }
  });
  const addCollention = () => {
    setIsShow(true);
  };
  function onKeyup(e) {
    if (e.key === "Enter") {
      submit(e);
    }
  }
  const submit = (e) => {
    const collection = {
      showItems: true,
      name: "",
      items: [],
      date: "",
    };
    collection.name = e.target.value;
    if (collection.name == "") {
      return;
    }
    collection.date = new Date().getTime();

    state.collections.push(collection);
    setState(Object.assign({}, state));

    setIsShow(false);
  };

  return (
    <>
      <header>
        <div
          className="newCollention"
          onClick={(e) => {
            e.stopPropagation();
            addCollention();
          }}
        >
          新集合
        </div>
        {isShow ? (
          <div className="add-collention">
            <input
              ref={inputEl}
              placeholder="名称"
              id="collentionName"
              onKeyUp={onKeyup}
              onBlur={() => {
                setIsShow(false);
              }}
              type="text"
            />
          </div>
        ) : (
          ""
        )}

        <style jsx>{`
          header {
            min-height: 15px;
            margin: var(--header-top) 15px 0 15px;

            font-size: 16px;

            background: var(--bg-med);
            border-radius: 7px;
          }
          header .newCollention {
            cursor: pointer;
            height: 0;

            line-height: 40px;
            text-align: center;
            color: var(--fg-color-text);

            opacity: 0;

            transition: height 0.8s ease-out;
          }

          header:hover .newCollention {
            height: 45px;

            line-height: 45px;

            opacity: 1;

            transition: line-height 0.1s ease-in 0.2s, height 0.3s ease,
              opacity 0.1s ease-in 0.2s;
          }

          .add-collention {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;

            width: 100%;
            height: 100%;

            color: var(--fg-color-text);

            background-color: var(--bg-color);
            opacity: 0.98;
          }
          .add-collention input {
            width: 100%;
            height: 45px;
            margin-top: var(--header-collention-top);
            padding-left: 30px;

            font-weight: 700;
            font-size: 20px;

            background-color: var(--bg-color);
            border: 0;
            outline-style: none;
          }
        `}</style>
      </header>
    </>
  );
}
