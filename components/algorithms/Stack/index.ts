import { Stack } from './Stack';

const stack = new Stack<number>();

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
