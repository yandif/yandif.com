import { Queue } from './Queue';

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.size()); // 输出: 3

console.log(queue.peek()); // 输出: 1

console.log(queue.dequeue()); // 输出: 1

console.log(queue.isEmpty()); // 输出: false

queue.clear();

console.log(queue.isEmpty()); // 输出: true
