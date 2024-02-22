// 冒泡排序（Bubble Sort）
export function bubbleSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 选择排序（Selection Sort）

export function selectionSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// 插入排序（Insertion Sort）

export function insertionSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// 希尔排序（Shell Sort）

export function shellSort(arr: number[]): number[] {
  const len = arr.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

// 归并排序（Merge Sort）

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

export function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

// 快速排序（Quick Sort）

export function quickSort(arr: number[]): number[] {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 1; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// 堆排序（Heap Sort）

function heapify(arr: number[], len: number, index: number) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== index) {
    const temp = arr[index];
    arr[index] = arr[largest];
    arr[largest] = temp;
    heapify(arr, len, largest);
  }
}

export function heapSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  for (let i = len - 1; i > 0; i--) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
  return arr;
}

// 计数排序（Counting Sort）

export function countingSort(arr: number[]): number[] {
  const len = arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucket = new Array(max - min + 1).fill(0);
  const result = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    bucket[arr[i] - min]++;
  }
  for (let i = 1; i < bucket.length; i++) {
    bucket[i] += bucket[i - 1];
  }
  for (let i = len - 1; i >= 0; i--) {
    result[bucket[arr[i] - min] - 1] = arr[i];
    bucket[arr[i] - min]--;
  }
  return result;
}

// 桶排序（Bucket Sort）

export function bucketSort(arr: number[]): number[] {
  const len = arr.length;
  const max = Math.max(...arr);
  const bucket = new Array(max + 1).fill(0);
  const result = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    bucket[arr[i]]++;
  }
  let index = 0;
  for (let i = 0; i < bucket.length; i++) {
    while (bucket[i] > 0) {
      result[index++] = i;
      bucket[i]--;
    }
  }
  return result;
}

// 基数排序（Radix Sort）
export function radixSort(arr: number[]): number[] {
  const len = arr.length;
  const max = Math.max(...arr);
  const maxDigit = `${max}`.length;
  for (let i = 0; i < maxDigit; i++) {
    const bucket = new Array(10).fill(0);
    for (let j = 0; j < len; j++) {
      const digit = Math.floor((arr[j] / Math.pow(10, i)) % 10);
      bucket[digit]++;
    }
    for (let j = 1; j < 10; j++) {
      bucket[j] += bucket[j - 1];
    }
    const result = new Array(len);
    for (let j = len - 1; j >= 0; j--) {
      const digit = Math.floor((arr[j] / Math.pow(10, i)) % 10);
      result[bucket[digit] - 1] = arr[j];
      bucket[digit]--;
    }
    arr = result;
  }
  return arr;
}
