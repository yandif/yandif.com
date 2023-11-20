/**
 * 一个栈数据结构。
 * @template T 栈中元素的类型。
 */
export class Stack<T> {
  private stack: T[];

  /**
   * 创建一个新的 Stack 实例。
   */
  constructor() {
    this.stack = [];
  }

  /**
   * 将元素推入栈顶。
   * @param {T} element 要推入的元素。
   */
  push(element: T): void {
    this.stack.push(element);
  }

  /**
   * 移除并返回栈顶的元素。
   * @returns {T|undefined} 栈顶的元素，如果栈为空则返回 undefined。
   */
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack.pop();
  }

  /**
   * 返回栈顶的元素，但不移除它。
   * @returns {T|undefined} 栈顶的元素，如果栈为空则返回 undefined。
   */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  /**
   * 检查栈是否为空。
   * @returns {boolean} 如果栈为空则返回 true，否则返回 false。
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * 返回栈中元素的数量。
   * @returns {number} 栈中元素的数量。
   */
  size(): number {
    return this.stack.length;
  }

  /**
   * 清空栈，移除所有元素。
   */
  clear(): void {
    this.stack = [];
  }
}
