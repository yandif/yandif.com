---
createDate: 2020-03-27
---

### 介绍

React 是由 Facebook 创建和维护的开源视图库。它是渲染当代 Web 应用程序用户界面（UI）的绝佳工具。

React 使用名为 JSX 的 JavaScript 语法扩展，允许你直接在 JavaScript 中编写 HTML。这有几个好处。它允许你在 HTML 中使用 JavaScript 的完整程序功能，并有助于保持代码的可读性。在大多数情况下，JSX 类似于你已经学过的 HTML，但是在这些挑战中将会涉及一些关键差异。

例如，因为 JSX 是 JavaScript 的语法扩展，所以你实际上可以直接在 JSX 中编写 JavaScript。要做到这一点，你只需在花括号中包含你希望被视为 JavaScript 的代码：`{“这被视为 JavaScript 代码”}`。

但是，由于浏览器不能解析 JSX，因此必须将 JSX 代码编译为 JavaScript。在这个过程中，转换器 Babel 是一个很受欢迎的工具。

### 创建 JSX

```js
const JSX = (
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);
```

### 添加注释

```js
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/*注释*/}
  </div>
);
```

### 渲染 DOM 树

```js
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'));
```

### 定义样式类

因为`class`是 JavaScript 中的关键字。JSX 使用`className`代替。

JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式。

```js
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```

### 自动闭合标记

```js
const JSX = (
  <div>
    <br />
    <hr />
  </div>
);
```

### 创建无状态组件

组件是 React 的核心。React 中的所有内容都是一个组件。

有两种方法可以创建 React 组件:

1.  使用函数

    以这种方式定义组件会创建无状态功能组件，可以将无状态组件视为可以接收数据并对其进行渲染的组件，但是它不管理或跟踪对数据的更改。React 要求你的函数名以大写字母开头。

    ```js
    const MyComponent = function () {
      const JSX = (
        <div>
          <h1>Hello React!</h1>
        </div>
      );
      return JSX;
    };
    ```

2.  使用 class 语法

    ```js
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <h1>Hello React!</h1>
          </div>
        );
      }
    }
    ```

### 嵌套组件

```js
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
  x;
}
```

### 渲染组件为 Dom 树

```js
ReactDOM.render(componentToRender, targetNode);
ReactDOM.render(<componentToRender />, targetNode);

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```

### 将 Props 传递给组件

```js
<ChildComponent>
    {props.date}
</ChildComponent>

<ParentComponent>
  <ChildComponent date={Date()} />
</ParentComponent>

```

### 传递数组作为 Props

```js
<ParentComponent>
  <ChildComponent colors={['green', 'blue', 'red']} />
</ParentComponent>
```

### 使用默认的 Props

```js
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
ShoppingCart.defaultProps = { items: 0 };
```

### 覆盖默认的 Props

```js
<ShoppingCart items={10} />
```

### 使用 PropTypes 来定义你期望的 Props

```js
import React, { PropTypes } from 'react';

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired };
```

```js
PropTypes.array.isRequired;
PropTypes.bool;
PropTypes.func;
PropTypes.number;
PropTypes.object;
PropTypes.string;
PropTypes.symbol;
```

### 使用 this.props 访问 Props

`{this.props.tempPassword}{:js}`

### 复习

```js
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// change code below this line
const Camper = (props) => <p>{props.name}</p>;

Camper.defaultProps = {
  name: 'CamperBot',
};

Camper.propTypes = {
  name: PropTypes.string.isRequired,
};
```

### 创建有状态的组件

React 中最重要的主题之一是`state`。 state 包含应用程序需要了解的任何数据，这些数据可能会随时间而变化。你希望应用程序能够响应 state 的变更，并在必要时显示更新后的 UI。React 为现代 Web 应用程序的状态管理提供了一个很好的解决方案。

你可以通过在`constructor`中的组件类上声明`state`属性来在 React 组件中创建 state，它在创建时使用`state`初始化组件。`state`属性必须设置为 JavaScript`对象`。声明如下：

this.state = { // describe your state here }

你可以在组件的整个生命周期内访问`state`对象，你可以更新它、在 UI 中渲染它，也可以将其作为 props 传递给子组件。`state`对象的使用可以很简单，亦可以很复杂，就看你怎么用了。请注意，你必须通过扩展`React.Component`来创建类组件，以便像这样创建`state`。

```js
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yandif',
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
```

### 在用户界面中渲染状态

```js
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yandif',
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
```

### 以另一种方式在用户界面中渲染状态

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yandif',
    };
  }
  render() {
    name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}
```

### 用 this.setState 设置状态

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'React Rocks!',
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
```

### 将 this 绑定到 Class 方法

除了设置和更新`state`之外，你还可以为组件类定义方法。类方法通常需要使用`this`关键字，以便它可以访问方法中类的属性（例如`state`和`props `）。有几种方法可以让你的类方法访问`this`。

一种常见的方法是在构造函数中显式地绑定`this`，这样当组件初始化时，`this`就会绑定到类方法。你可能已经注意到上一个挑战使用了`this.handleClick = this.handleClick.bind(this)`用于其在构造函数中的`handleClick`方法。然后，当你在类方法中调用像`this.setState()`这样的函数时，`this`指的是这个类，而不是`undefined`。

**注意：** `this`关键字是 JavaScript 中最令人困惑的方面之一，但它在 React 中扮演着重要的角色。虽然它的行为在这里是完全正常的，但是这些课程并不深入研究`this`，所以如果以上内容令你感到困惑，请参考其他课程！

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: 'You clicked!',
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>x
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### 改变 state 方式

```js
this.setState({
  counter: this.state.counter + this.props.increment,
});

this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));

this.setState((state) => ({
  counter: state.counter + 1,
}));
```

### input 双向绑定

```js
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
```

### 控制表单

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    this.setState({
      submit: this.state.input,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange.bind(this)}
          />
          <button type="submit">Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```

### 将 State 作为 Props 传递给子组件

```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot',
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name} </h1>
      </div>
    );
  }
}
```

### 传递回调作为 Props

```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}
```

### 生命周期方法

React 组件有几种特殊方法，可以在组件生命周期的特定点执行操作。这些称为生命周期方法或生命周期钩子，允许你在特定时间点捕获组件。这可以在渲染之前、更新之前、接收 props 之前、卸载之前等等。以下是一些主要生命周期方法的列表：

```js
componentWillMount();
componentDidMount();
componentWillUnmount();
componentWillReceiveProps();
shouldComponentUpdate();
componentWillUpdate();
componentDidUpdate();
componentWillUnmount();
```

#### componentWillMount()

当组件被挂载到 DOM 时，`componentWillMount()`方法在`render()`方法之前被调用。

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('123');
  }
  render() {
    return <div />;
  }
}
```

#### componentDidMount()

React 的最佳实践是在生命周期方法`componentDidMount()`中对服务器进行 API 调用或任何其他调用。将组件装载到 DOM 后会调用此方法。此处对`setState()`的任何调用都将触发组件的重新渲染。在此方法中调用 API 并使用 API 返回的数据设置 state 时，一旦收到数据，它将自动触发更新。

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```

#### componentWillUnmount()

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! ',
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
```

#### componentWillReceiveProps()

#### shouldComponentUpdate(nextProps,nextState)

优化重渲染

如果任何组件收到新的状态或新的道具，它将重新呈现自己及其所有子级。通常没关系。但是 React 提供了一个生命周期方法，您可以在子组件收到新状态或道具时调用该方法，并明确声明组件是否应该更新。该方法为 shouldComponentUpdate（），它使用 nextProps 和 nextState 作为参数。 此方法是优化性能的有用方法。

例如，默认行为是您的组件在收到新道具时会重新渲染，即使这些道具没有更改也是如此。您可以使用 shouldComponentUpdate（）通过比较道具来防止这种情况。该方法必须返回一个布尔值，该值告诉 React 是否更新组件。您可以将当前道具（this.props）与下一个道具（nextProps）进行比较，以确定是否需要更新，并相应地返回 true 或 false。

```js
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    return nextProps.value % 2 == 0;
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

### 介绍内联样式

还有其他复杂的概念可以为你的 React 代码增加强大的功能。但是，你可能会想知道更简单的问题，比如：如何对在 React 中创建的 JSX 元素进行风格化。你可能知道，由于[将 class 应用于 JSX 元素的方式](https://learn.freecodecamp.one/define-an-html-class-in-jsx 'null')与 HTML 中的使用并不完全相同。

如果从样式表导入样式，它就没有太大的不同。使用`className`属性将 class 应用于 JSX 元素，并将样式应用于样式表中的 class。另一种选择是使用\*\*\*内联\*\*\*样式，这在 ReactJS 开发中非常常见。

你将内联样式应用于 JSX 元素，类似于你在 HTML 中的操作方式，但有一些 JSX 差异。以下是 HTML 中内联样式的示例：

```
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>

```

JSX 元素使用`style`属性，但是由于 JSX 的传输方式，你不能将值设置为`字符串`。相反，你应将其设置为 JavaScript`对象`。这里有一个例子：

```
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

```

注意我们使用驼峰式命名的 "fontSize" 属性，这是因为 React 不会接受样式对象中的连字符。React 将在 HTML 中为我们应用正确的属性名称。

```js
class Colorful extends React.Component {
  render() {
    return <div style={{ color: 'yellow', fontSize: 72 }}>Big Red</div>;
  }
}
```

### 在 React 中添加内联样式

在上一次挑战中，你可能已经注意到，除了设置为 JavaScript 对象的`style`属性之外，与 HTML 内联样式相比，React 的内联样式还有其他几个语法差异。首先，某些 CSS 样式属性的名称使用驼峰式命名。例如，最后一个挑战用`fontSize`而不是`font-size`来设置字体的大小。对于 JavaScript 对象属性来说，像`font-size`这样的连字符命名是无效的语法，所以 React 使用驼峰式命名。通常，任何连字符的 style 属性在 JSX 中都是使用驼峰式命名的。

除非另有规定，否则所有属性值是长度的（如`height`、`width`和`fontSize`）其单位都假定为`px`。例如，如果要使用`em`，可以用引号将值和单位括起来，例如`{fontSize: "4em"}`。除了默认为`px`的长度值之外，所有其他属性值都应该用引号括起来。

```js
const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple',
};

class Colorful extends React.Component {
  render() {
    return <div style={styles}>Style Me!</div>;
  }
}
```

### 在 React Render 方法中使用 JavaScript

在之前的挑战中，你学习了如何使用大括号`{ }`将 JavaScript 代码插入到 JSX 代码中，用于访问 props、传递 props、访问 state、在代码中插入注释以及最近学习的定制组件样式等任务。这些都是将 JavaScript 放在 JSX 中的常见用例，但是在 React 组件中使用 JavaScript 代码还有其他方式。

在`render`方法中编写 JavaScript，你可以把 JavaScript 直接放在`return`语句之前，而\*\*\*不必\*\*\*将其插入大括号中。这是因为它还不在 JSX 代码中。当你稍后想在`return`语句中的 JSX 代码中使用变量时，可以将变量名放在大括号中。

```js
const inputStyle = {
  width: 235,
  margin: 5,
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: '',
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: '',
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful',
    ];
    const answer = 'change me!'; // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>{possibleAnswers[this.state.randomIndex]}</p>
      </div>
    );
  }
}
```

### 使用 If/Else 条件进行渲染

使用 JavaScript 控制渲染视图的另一个应用是将渲染的元素绑定到一个条件。当条件为真时，将呈现一个视图，反之，则呈现另一种视图。你可以在 React 组件的`render()`方法中使用的标准`if/else`语句来实现这一点。

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }
  render() {
    if (this.state.display == true) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          {' '}
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}
```

### 使用 && 获得更简洁的条件

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // change code below this line
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}
```

### 使用三元表达式进行条件渲染

condition ? expressionIfTrue : expressionIfFalse

```js
const inputStyle = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      input: '',
      userAge: '',
    };
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: '',
    });
  }
  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />

        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```

### 有条件地从 props 渲染

```js
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty > 0.5 ? 'You Win!' : 'You Lose!'}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    const expression = Math.random();
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>

        <p>{'Turn: ' + this.state.counter}</p>
        <Results fiftyFifty={expression} />
      </div>
    );
  }
}
```

### 根据组件状态有条件地更改内联 CSS

```js
import React from 'react';
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    let inputStyle = {
      border: '1px solid black',
    };
    // change code below this line
    if (this.state.input.length > 15) {
      inputStyle = {
        border: '3px solid red',
      };
    }
    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default GateKeeper;
```

### 使用 Array.map() 动态渲染元素

```js
const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: '',
      toDoList: [],
    };
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray,
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  render() {
    const items = this.state.toDoList.map((i) => <li>{i}</li>); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

### 为同级元素赋予唯一键属性

上一个挑战展示了如何使用`map`方法根据用户输入动态渲染多个元素。然而，这个例子中缺少一个重要的部分。创建元素数组时，每个元素都需要一个设置为唯一值的`key`属性。React 使用这些键来跟踪哪些项目被添加、更改或删除。这有助于在以任何方式修改列表时提高重新渲染过程的效率。请注意，键只需要在同级元素之间是唯一的，它们不需要在应用程序中是全局唯一的。

```js
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue',
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((i, index) => (
    <li ket={index}>{i}</li>
  ));
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
```

### 使用 Array.Filter() 动态过滤数组

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true,
        },
        {
          username: 'Alan',
          online: false,
        },
        {
          username: 'Mary',
          online: true,
        },
        {
          username: 'Jim',
          online: false,
        },
        {
          username: 'Sara',
          online: true,
        },
        {
          username: 'Laura',
          online: true,
        },
      ],
    };
  }
  render() {
    const renderOnline = this.state.users
      .filter((user) => user.online)
      .map((i, index) => <li key={index}>{i.username}</li>); // change code here
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

### renderToString

```js
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

// change code below this line
ReactDOMServer.renderToString(<App />);
```
