---
createDate: 2020-3-27
---

### 介绍

[Redux](https://redux.js.org)  是 JavaScript 状态容器，提供可预测化的状态管理。Redux 可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。Redux 支持很多界面库，本章是在介绍其和 React 组合前的一个入门。

### 创建 Redux Store

Redux 是一个状态管理框架，可以与包括 React 在内的许多不同的 Web 技术一起使用。

在 Redux 中，只有一个状态对象负责应用程序的整个状态。

这意味着，如果您有一个包含十个组件的 React 应用程序，并且每个组件都有自己的本地状态，则应用程序的整个状态将由 Redux 存储区中的单个状态对象定义。

这是学习 Redux 时要理解的第一个重要原则：Redux 存储是应用程序状态的唯一事实来源。

这也意味着，只要您的应用程序的任何部分想要更新状态，它都必须通过 Redux 存储进行更新。单向数据流使您可以更轻松地跟踪应用程序中的状态管理。

Redux 存储是保存和管理应用程序状态的对象。 Redux 对象上有一个名为 createStore() 的方法，可用于创建 Redux 存储。此方法将 reducer 函数作为必需参数。

```
const reducer = (state = 5) => {
  return state;
}

const store=Redux.createStore(reducer);

```

### 从 Redux Store 获取状态

Redux 存储对象提供了几种方法，可让您与其进行交互。例如，您可以使用 getState（）方法检索 Redux 存储对象中保存的当前状态。

```
const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState()

```

### 定义 Redux Action

由于 Redux 是状态管理框架，因此更新状态是其核心任务之一。

在 Redux 中，所有状态更新都是由调度操作触发的。

操作只是一个 JavaScript 对象，其中包含有关已发生的操作事件的信息。

Redux 存储接收这些操作对象，然后相应地更新其状态。

有时 Redux 动作还会携带一些数据。例如，操作在用户登录后带有用户名。虽然数据是可选的，但操作必须带有 type 属性，该属性指定发生的操作的“类型”。 将 Redux 动作视为使您将应用程序中发生的事件的信息传递到 Redux 商店的 Messenger。然后，Store 根据发生的动作进行状态更新业务。

```js
const action = {
  type: 'LOGIN',
  username: '',
  password: '',
};
```

### 定义 Action Creator

创建动作后，下一步是将动作发送到 Redux 存储，以便它可以更新其状态。

在 Redux 中，您可以定义 Action Creator 来完成此任务。Action Creator 只是一个返回 Action 的 JavaScript 函数。

换句话说，Action Creator 创建代表动作事件的对象。

```js
const action = {
  type: 'LOGIN',
};

function actionCreator() {
  return action;
}
```

### 派遣**Action Event**

dispatch 方法是用于将操作分派到 Redux 存储的方法。调用 store.dispatch()并传递操作创建者返回的值会将操作发送回存储。

```js
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: 'LOGIN',
  };
};

store.dispatch(loginAction());
```

### 在 store 中处理 Action

创建并派遣 Action 后，Redux 存储区需要知道如何响应该动作。这是 reducer 函数的工作。

Redux 中的 reducer 负责响应操作而进行的状态修改。reducer 将状态和操作作为参数，并且始终返回新状态。

重要的是要看到这是减速器的唯一作用。它没有副作用-它永远不会调用 API 端点，也永远不会有任何隐藏的惊喜。

reducer 只是一个纯函数，它接受状态和操作，然后返回新状态。

Redux 中的另一个关键原则是状态是只读的。换句话说，reducer 函数必须始终返回状态的新副本，并且永远不要直接修改状态。 Redux 不会强制执行状态不变性，但是，您有责任在化简函数的代码中强制执行它。

```js
const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'LOGIN') {
    return {
      login: true,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN',
  };
};
```

### 使用 switch 语句处理多个操作

```js
const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        authenticated: true,
      };
      break;
    case 'LOGOUT':
      return {
        authenticated: false,
      };
      break;
    default:
      return state;
      break;
      F;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN',
  };
};

const logoutUser = () => {
  return {
    type: 'LOGOUT',
  };
};
```

### 使用 const 定义 Actiontype

```js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };

    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
```

### 注册一个 Store Listener

您可以在 Redux 存储对象上访问的另一种方法是 store.subscribe（）。这使您可以向存储库订阅侦听器函数，每当对存储库调度操作时，就会调用这些函数。此方法的一种简单用法是为 store 订阅一个功能，该功能在每次收到动作并更新商店时都简单地记录一条消息。

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

let count = 0;

store.subscribe(() => {
  count++;
});

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
```

### 结合多个 Reducer

当您的应用程序状态开始变得越来越复杂时，可能会很想将状态分为多个部分。

相反，请记住 Redux 的第一个原则：所有应用程序状态都保存在存储区中的单个状态对象中。

因此，Redux 提供了减速器组成作为复杂状态模型的解决方案。您定义了多个化简器以处理应用程序状态的不同部分，然后将这些化简器组合成一个根化简表。然后将根缩减器传递到 Redux createStore（）方法中。

为了让我们将多个 reducer 组合在一起，Redux 提供了 CombineReducers（）方法。此方法接受一个对象作为参数，您可以在其中定义将键与特定的 reducer 函数相关联的属性。您为密钥指定的名称将被 Redux 用作关联状态的名称。

通常，当每个应用程序状态以某种方式不同或唯一时，为每个应用程序状态创建一个简化器是一个好习惯。

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer,
});

const store = Redux.createStore(rootReducer);
```

### 将 Action 数据发送到 store

到目前为止，您已经了解了如何将操作分配给 Redux 存储，但是到目前为止，这些操作除了类型之外还没有包含任何其他信息。您还可以发送特定数据以及操作。实际上，这是非常常见的，因为操作通常源自某些用户交互，并且倾向于随其携带一些数据。 Redux 存储经常需要了解此数据。

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch (action.type) {
    case ADD_NOTE:
      return action.text;
      break;

    default:
      return state;
  }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note,
  };
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

### 使用中间件处理异步操作

异步操作是 Web 开发中不可避免的一部分。

在某些时候，您需要在 Redux 应用程序中调用异步端点，那么您如何处理这些类型的请求？ Redux 提供了专门为此目的设计的中间件，称为 Redux Thunk 中间件。

要包括 Redux Thunk 中间件，请将其作为参数传递给 Redux.applyMiddleware（）。

然后将该语句作为第二个可选参数提供给 createStore（）函数。

要创建一个异步动作，您需要在动作创建器中返回一个函数，该函数将 dispatch 作为参数。在此函数内，您可以调度动作并执行异步请求。

```js
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function (dispatch) {
    store.dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice'],
      };
      store.dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default),
);
```

### 一个例子

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state += 1);
      break;
    case DECREMENT:
      return (state -= 1);
      break;
    default:
      return state;
  }
};

const incAction = () => {
  return { type: INCREMENT };
};

const decAction = () => {
  return { type: DECREMENT };
};
const store = Redux.createStore(counterReducer);
```

### 在数组上使用扩展运算符

ES6 中有助于在 Redux 中实现状态不变性的一种解决方案是散布运算符：....散布运算符具有多种应用程序，其中一种非常适合以前的挑战，即从现有阵列中产生新阵列。例如，如果您有一个数组 myArray 并编写：

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return [...state, action.todo];
      return;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo,
  };
};

const store = Redux.createStore(immutableReducer);
```

### 从数组中删除项目

是时候练习从数组中删除项目了。也可以在此处使用扩展运算符。

其他有用的 JavaScript 方法包括 slice()和 concat()。

```js
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    // or return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index,
  };
};

const store = Redux.createStore(immutableReducer);
```

### 使用 Object.assign 复制对象

最后几个挑战适用于数组，但是当状态是对象时，也存在一些方法来帮助强制状态不变。 Object.assign（）实用程序是处理对象的有用工具。 Object.assign（）接受目标对象和源对象，并将属性从源对象映射到目标对象。任何匹配的属性都将被源对象中的属性覆盖。通过将空对象作为第一个参数，然后传递要复制的对象，通常使用此行为来制作对象的浅表副本。这是一个例子：

`const newObject = Object.assign({}, obj1, obj2);{:js}`

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp',
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      return Object.assign({}, state, { status: 'online' });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE',
  };
};

const store = Redux.createStore(immutableReducer);
```
