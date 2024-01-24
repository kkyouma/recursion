function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftSubArr = arr.slice(0, mid);
  const rightSubArr = arr.slice(mid);

  return merge(mergeSort(leftSubArr), mergeSort(rightSubArr));
}

function merge(leftSubArr, rightSubArr) {
  const sortedArr = [];
  while(leftSubArr.length && rightSubArr.length){
    
    if (leftSubArr[0] <= rightSubArr[0]) {
      sortedArr.push(leftSubArr.shift())
    } else {
      sortedArr.push(rightSubArr.shift())
    }
  }
  console.log(sortedArr)
  return [...sortedArr, ...leftSubArr, ...rightSubArr] // In case of an odd array
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(arr));
