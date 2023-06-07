export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // 入栈
  push(element: T): void {
    this.items.push(element);
  }

  // 出栈
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // 返回栈顶元素
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 返回栈的大小
  size(): number {
    return this.items.length;
  }

  // 清空栈
  clear(): void {
    this.items = [];
  }
}
