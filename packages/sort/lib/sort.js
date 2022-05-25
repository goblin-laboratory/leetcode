function bubbleSort(arr) {
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < l; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

function insertionSort(arr) {
  let i,
    j,
    tmp,
    l = arr.length;
  for (i = 1; i < l; i++) {
    tmp = a[i];
    for (j = i - 1; 0 <= j && a[j] > tmp; j--) {
      a[j + 1] = a[j];
    }
    a[j + 1] = tmp;
  }
  return arr;
}

function shellSort(arr) {
  let len = arr.length,
    gap = 1;
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; 0 < gap; gap = Math.floor(gap / 3)) {
    for (let i = gap, j = 0; i < len; i++) {
      let temp = arr[i];
      for (j = i - gap; 0 <= j && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}

function mergeSort(arr) {
  let len = arr.length;
  if (2 > len) {
    return arr;
  }
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right) {
  let index = left + 1;
  for (let i = index; i <= right; i++) {
    if (a[i] < arr[left]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, left, index - 1);
  return index - 1;
}

function quickSort(arr, left, right) {
  let len = arr.length;
  left = left ?? 0;
  right = right ?? len - 1;
  if (left < right) {
    let index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }
  return arr;
}

function heapify(arr, i, len) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, len);
  }
}

function buildMaxHeap(arr, len) {
  for (let i = Math.floor(len / 2); 0 <= i; i--) {
    heapify(arr, i, len);
  }
}

function heapSort(arr) {
  buildMaxHeap(arr, arr.length);
  for (let i = arr.length - 1; 0 < i; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
  return arr;
}

function countingSort(arr, maxValue) {
  const bucket = Array(maxValue + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    bucket[arr[i]]++;
  }
  arr = [];
  for (let i = 1; i < bucket.length; i++) {
    if (bucket[i]) {
      arr.push(...Array(bucket[i]).fill(i));
    }
  }
  return arr;
}

function bucketSort(arr, bucketSize = 5) {
  if (0 === arr.length) {
    return arr;
  }
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  const bucketCount = Math.ceil((maxValue - minValue) / bucketSize);
  const bucketList = Array(bucketCount);
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] - minValue) / bucketSize);
    if (bucketList[index]) {
      bucketList[index].push(arr[i]);
    } else {
      bucketList[index] = [arr[i]];
    }
  }
  arr = [];
  for (let i = 0; i < bucketList.length; i++) {
    if (bucketList[i]) {
      insertionSort(bucketList[i]);
      arr.push(...bucketList[i]);
    }
  }
  return arr;
}

function radixSort(arr, maxDigit) {
  for (let i = 0, dev = 1, mod = 10; i < maxDigit; i++, dev *= 10, mod *= 10) {
    const list = [];
    for (let j = 0; j < arr.length; j++) {
      const index = Math.floor((arr[j] % mod) / dev);
      if (list[index]) {
        list[index].push(arr[j]);
      } else {
        list[index] = [arr[j]];
      }
    }
    arr = [];
    for (let j = 0; j < list.length; j++) {
      if (list[j]) {
        arr.push(...list[j]);
      }
    }
  }
  return arr;
}

const a = [12, 7, 53, 14, 21, 10, 63, 48, 31];
console.log(radixSort(a, 2));
