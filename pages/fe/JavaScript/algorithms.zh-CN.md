---
createDate: 2023-05-22
---

### 数组

#### 创建数组

使用字面量语法 `[]{:js}` 或者 `new Array(){:js}` 创建数组。

使用字面量语法创建数组示例：

```js copy
// 创建一个空数组
const arr1 = [];

// 创建一个包含元素的数组
const arr2 = [1, 2, 3, 4, 5];

// 创建一个包含不同类型的元素的数组
const arr3 = [1, 'two', true, { name: 'yandif' }, null];
```

使用 new Array()创建数组示例：

```js copy
// 创建一个空数组
const arr1 = new Array();

// 创建一个包含元素的数组
const arr2 = new Array(1, 2, 3, 4, 5);

// 创建一个指定长度的数组
const arr3 = new Array(10); // 创建一个长度为10的空数组

// 创建一个指定长度并且包含默认值的数组
const arr4 = new Array(5).fill(0); // 创建一个长度为5，并且所有元素都为0的数组
```

#### 添加或删除元素

- 使用 `push(){:js}` 方法在数组末尾添加一个或多个元素。

  ```js copy
  const array = [1, 2, 3];
  array.push(4); // 添加单个元素
  console.log(array); // [1, 2, 3, 4]
  array.push(5, 6); // 添加多个元素
  console.log(array); // [1, 2, 3, 4, 5, 6]
  ```

- 使用 `unshift(){:js}` 方法在数组开头添加一个或多个元素。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  array.unshift(0); // 在数组开头添加一个元素
  console.log(array); // [0, 1, 2, 3, 4, 5]
  array.unshift(-2, -1); // 在数组开头添加多个元素
  console.log(array); // [-2, -1, 0, 1, 2, 3, 4, 5]
  ```

- 使用 `pop(){:js}` 方法在数组末尾删除一个元素。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const lastElement = array.pop(); // 删除数组的最后一个元素
  console.log(lastElement); // 输出: 5
  console.log(array); // 输出: [1, 2, 3, 4]
  ```

- 使用 `shift(){:js}` 方法在数组开头删除一个元素。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const firstElement = array.shift(); // 删除数组的第一个元素
  console.log(firstElement); // 输出: 1
  console.log(array); // 输出: [2, 3, 4, 5]
  ```

- 使用 `splice(){:js}` 方法修改数组，可以删除、插入或替换元素。

  ```js copy
  const array = [1, 2, 3, 4, 5];

  // 删除元素
  array.splice(2, 1); // 从索引 2 开始删除一个元素
  console.log(array); // 输出: [1, 2, 4, 5]

  // 插入元素
  array.splice(1, 0, 'a', 'b'); // 从索引 1 开始插入 'a' 和 'b'
  console.log(array); // 输出: [1, 'a', 'b', 2, 4, 5]

  // 替换元素
  array.splice(3, 2, 'x', 'y', 'z'); // 从索引 3 开始删除 2 个元素，并插入 'x', 'y', 'z'
  console.log(array); // 输出: [1, 'a', 'b', 'x', 'y', 'z', 5]
  ```

- 使用 `slice(){:js}` 方法创建一个新的数组，包含原始数组的指定部分。

  ```js copy
  const array = [1, 2, 3, 4, 5];

  // 切割数组
  const slicedArray = array.slice(1, 4); // 从索引 1 开始到索引 4（不包含）结束的元素
  console.log(slicedArray); // 输出: [2, 3, 4]

  // 创建副本
  const copyArray = array.slice(); // 创建原始数组的副本
  console.log(copyArray); // 输出: [1, 2, 3, 4, 5]
  ```

#### 二维数组和多维数组

二维数组是指数组中的每个元素都是一个数组。 例如：

```js copy
const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(twoDimensionalArray[1][1]); // 输出: 5
```

多维数组是指数组中的每个元素是一个数组，形成了多个维度的嵌套。 例如：

```js copy
const threeDimensionalArray = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(threeDimensionalArray[1][0][1]); // 输出: 8
```

#### 常用的数组方法

- `concat(){:js}`: 将多个数组或值合并为一个新数组。

  ```js copy
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const newArray = array1.concat(array2);
  console.log(newArray); // 输出: [1, 2, 3, 4, 5, 6]
  ```

- `join(){:js}`: 将数组的所有元素连接为一个字符串。

  ```js copy
  const array = ['Hello', 'World'];
  const joinedString = array.join(' ');
  console.log(joinedString); // 输出: "Hello World"
  ```

- `indexOf(){:js}`: 返回指定元素首次出现的索引。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const index = array.indexOf(3);
  console.log(index); // 输出: 2
  ```

- `lastIndexOf(){:js}`: 返回指定元素最后一次出现的索引。

  ```js copy
  const array = [1, 2, 3, 4, 3];
  const lastIndex = array.lastIndexOf(3);
  console.log(lastIndex); // 输出: 4
  ```

- `includes(){:js}`: 判断数组是否包含指定元素。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const includes = array.includes(3);
  console.log(includes); // 输出: true
  ```

- `forEach(){:js}`: 遍历数组的每个元素并执行回调函数。

  ```js copy
  const array = [1, 2, 3];
  array.forEach((item) => {
    console.log(item);
  });
  // 输出:
  // 1
  // 2
  // 3
  ```

- `map(){:js}`: 创建一个新数组，包含对原数组元素进行处理后的结果。

  ```js copy
  const array = [1, 2, 3];
  const mappedArray = array.map((item) => item * 2);
  console.log(mappedArray); // 输出: [2, 4, 6]
  ```

- `filter(){:js}` : 创建一个新数组，包含符合条件的原数组元素。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const filteredArray = array.filter((item) => item % 2 === 0);
  console.log(filteredArray); // 输出: [2, 4]
  ```

- `reduce(){:js}` : 对数组的元素进行累积计算并返回结果。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  console.log(sum); // 输出: 15
  ```

- `sort(){:js}` : 对数组元素进行排序。

  ```js copy
  const array = [3, 1, 4, 2, 5];
  array.sort();
  console.log(array); // 输出: [1, 2, 3, 4, 5]
  ```

  sort 接收一个比较函数:`(a, b) => number{:js}`

  比较函数的返回值有三种情况：

  - 返回值小于 0，表示 a 应该在 b 之前。
  - 返回值等于 0，表示 a 和 b 的顺序不变。
  - 返回值大于 0，表示 a 应该在 b 之后。

  ```js copy
  const array = [3, 1, 4, 2, 5];
  array.sort((a, b) => a - b);
  console.log(array); // 输出: [1, 2, 3, 4, 5]
  ```

- `reverse(){:js}` : 颠倒数组元素的顺序。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array); // 输出: [5, 4, 3, 2, 1]
  ```

- `every(){:js}` : 判断数组的每个元素是否都满足指定条件。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const allPositive = array.every((item) => item > 0);
  console.log(allPositive); // 输出: true
  ```

- `some(){:js}` : 判断数组是否至少有一个元素满足指定条件。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const hasEvenNumber = array.some((item) => item % 2 === 0);
  console.log(hasEvenNumber); // 输出: true
  ```

- `find(){:js}` : 返回数组中满足条件的第一个元素。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const foundElement = array.find((item) => item > 3);
  console.log(foundElement); // 输出: 4
  ```

- `findIndex(){:js}`: 返回数组中满足条件的第一个元素的索引。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const foundIndex = array.findIndex((item) => item > 3);
  console.log(foundIndex); // 输出: 3
  ```

- `filter(){:js}` : 返回数组中满足条件的所有元素组成的新数组。

  ```js copy
  const array = [1, 2, 3, 4, 5];
  const filteredArray = array.filter((item) => item > 3);
  console.log(filteredArray); // 输出: [4, 5]
  ```

### 栈

栈（Stack）是一种常见的数据结构，它遵循先进后出（LIFO）的原则。

- 栈顶：栈顶指的是栈中最新添加的元素，也就是最后一个入栈的元素。
- 栈底：栈底指的是栈中最早添加的元素，也就是最先入栈的元素。

#### 栈的创建

常用方法：

- `push(element){:js}`：将元素压入栈顶。
- `pop(){:js}`：弹出并返回栈顶元素。
- `peek(){:js}`：返回栈顶元素，但不对栈进行修改。
- `isEmpty(){:js}`：判断栈是否为空，如果栈中没有任何元素，返回 true；否则，返回
  false。
- `size(){:js}`：返回栈中元素的个数。
- `clear(){:js}`：清空栈，移除所有元素。

实现方式：

```js copy
class Stack {
  constructor() {
    this.items = [];
  }

  // 入栈
  push(element) {
    this.items.push(element);
  }

  // 出栈
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // 返回栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回栈的大小
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }
}
```

使用方式：

```js copy
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 输出 30
console.log(stack.size()); // 输出 3

console.log(stack.pop()); // 输出 30
console.log(stack.pop()); // 输出 20

console.log(stack.size()); // 输出 1
console.log(stack.isEmpty()); // 输出 false

stack.clear();
console.log(stack.isEmpty()); // 输出 true
```

#### 栈的应用

1. 函数调用：JavaScript 调用栈（Call Stack）

2. 进制转换：

   ```js copy
   function decimalToBase(decimal, base) {
     if (decimal === 0) {
       return '0';
     }
     if (decimal < 0 || base < 2 || base > 36) {
       return '';
     }
     const stack = new Stack();
     let result = '';
     const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     while (decimal > 0) {
       const remainder = decimal % base;
       stack.push(remainder);
       decimal = Math.floor(decimal / base);
     }
     while (!stack.isEmpty()) {
       result += digits[stack.pop()];
     }
     return result;
   }
   console.log(decimalToBase(10, 2));
   console.log(decimalToBase(123, 16));
   console.log(decimalToBase(255, 8));
   console.log(decimalToBase(100, 16));
   ```

### 队列

队列（Queue）是一种常见的数据结构，遵循先进先出（FIFO）的原则。类似于生活中排队的概念，最先进入队列的元素将首先被移除。

#### 创建队列
