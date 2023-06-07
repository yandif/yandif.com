import { Stack } from './Stack'

function decimalToBase(decimal: number, base: number): string {
  if (decimal === 0) {
    return '0';
  }

  if (decimal < 0 || base < 2 || base > 36) {
    return '';
  }

  const stack = new Stack<number>();
  let result = '';

  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  while (decimal > 0) {
    const remainder = decimal % base;
    stack.push(remainder);
    decimal = Math.floor(decimal / base);
  }

  while (!stack.isEmpty()) {
    result += digits[stack.pop()!];
  }

  return result;
}

// 测试
console.log(decimalToBase(10, 2)); // 输出 "1010"
console.log(decimalToBase(123, 16)); // 输出 "7B"
console.log(decimalToBase(255, 8)); // 输出 "377"
console.log(decimalToBase(100, 16)); // 输出 "64"
