// function countZeroes(arr) {
//   let leftIdx = 0;
//   let zeroes = -1;
//   let count = 0;
//   while (zeroes === -1) {
//     count++
//     if(count===100) zeroes = 1;
//     let rightIdx = arr.length - 1;
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     if (arr[middleIdx] === 0 && (arr[middleIdx - 1] === 1)) {
//       console.log(middleIdx);
//       console.log(rightIdx)
//       arr = arr.splice(middleIdx, rightIdx+1);
//       zeroes = arr.length;
//     }
//     else if(arr[middleIdx] === 0 && arr[middleIdx-1]===0){
//       let newMiddleIdx = middleIdx-2;
//       while(arr[newMiddleIdx]===0){
//         newMiddleIdx--
//       }
//       newMiddleIdx
//       zeroes = arr.splice(newMiddleIdx,rightIdx).length-1
//     }
//     else {
//       arr = arr.splice(middleIdx, rightIdx);
//     }

//   }
//   return zeroes;
// }

// O(n) solution
// const firstZero = arr.indexOf(0);
// return arr.splice(firstZero,arr.length-1).length;

// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

// const sortedFrequency = (arr, target) => {
//   //
//   console.log(arr)
//   let count = 0
//   let resolved = false;
//   while(!resolved){
//   count++
//   if(count>10) resolved = true
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;
//   let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//   if(arr.length===0){
//     return -1;
//   }
//   if(arr[rightIdx]>target && arr[rightIdx-1] === target && arr[0] === target){
//     return arr.length -1;
//   }
//   if(arr[middleIdx]<target){
//     arr[middleIdx]
//     target
//     arr = arr.splice(middleIdx,rightIdx);
//   }
//   if(arr[middleIdx]===target && arr[middleIdx]-1 === target){
//     middleIdx--
//   }
//   if(arr[middleIdx]===target && arr[middleIdx]-1 !== target){
//     return arr.splice(middleIdx,rightIdx).length
//   }
//   if(arr[middleIdx]>target){
//     arr = arr.splice(leftIdx,middleIdx);
//   }
//   }
// }

// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

// const findRotatedIndex = (arr, int) => {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;
//   let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

//   let count = 0;
//     if(arr[middleIdx]===int){
//       return middleIdx;
//     }
//     if(arr[middleIdx]>int){
//       for(let i = middleIdx; i<=rightIdx; i++){
//         if(arr[i]===int) return i;
//       }
//     }
//     if(arr[middleIdx]!==int){
//       for(let j = leftIdx; j<=middleIdx; j++){
//         if(arr[j]===int) return j;
//       }
//     }
//       return -1;

// }

// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

// const findRotationCount = arr => {
//   //
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;
//   let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//   let resolved = false;
//   while (!resolved) {
//     if (arr[middleIdx] < arr[middleIdx - 1]) {
//       return arr.splice(leftIdx, middleIdx).length;
//     }

//     if (arr[middleIdx] > arr[rightIdx]) {
//       return arr.length - 1;
//     }

//     if (arr[middleIdx] > leftIdx && arr[middleIdx] < rightIdx) {
//       arr = arr.splice(leftIdx + 1, rightIdx - 1);
//       continue;
//     }
//     return 0;
//   }
// };

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2

// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)

// const findFloor = (arr, target) => {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;
//   let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

//   let resolved = false;

//   if (middleIdx === target) {
//     return target;
//   }
//   if (middleIdx > target) {
//     arr = arr.splice(leftIdx, middleIdx);
//   }
//   if (middleIdx < target) {
//     arr = arr.splice(middleIdx, rightIdx);
//   }
//   let closestNum = -1;
//   for (let i of arr) {
//     if (i <= target) closestNum = i;
//   }
//   return closestNum;
// };
