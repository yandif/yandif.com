export class Queue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  // 入队：将元素添加到队列的末尾
  enqueue(item: T): void {
    this.queue.push(item);
  }

  // 出队：移除并返回队列的第一个元素
  dequeue(): T | undefined {
    return this.queue.shift();
  }

  // 查看队首元素，但不修改队列
  peek(): T | undefined {
    return this.queue[0];
  }

  // 判断队列是否为空
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  // 返回队列中元素的数量
  size(): number {
    return this.queue.length;
  }

  // 清空队列
  clear(): void {
    this.queue = [];
  }
}
