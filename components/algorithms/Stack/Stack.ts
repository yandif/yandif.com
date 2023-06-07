export class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  // 入栈
  push(element: T): void {
    this.stack.push(element);
  }

  // 出栈
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack.pop();
  }

  // 返回栈顶元素
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  // 判断栈是否为空
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  // 返回栈的大小
  size(): number {
    return this.stack.length;
  }

  // 清空栈
  clear(): void {
    this.stack = [];
  }
}
