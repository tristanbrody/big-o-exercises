const countZeroes = arr => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let zeroes = -1;
  while (zeroes === -1) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (middleIdx === 0 && arr[middleIdx - 1] === -1) {
      zeroes = arr.splice(0, arr[middleIdx]);
    }
  }
  return zeroes;
};

const res = countZeroes([1, 1, 1, 0, 0, 0]);
console.log(res);
console.log("res");
