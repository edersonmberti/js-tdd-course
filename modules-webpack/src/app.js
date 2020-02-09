import * as R from "rambda";

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = R.uniq(arr1);
const arr4 = R.uniq(arr2);

console.log(arr3);
console.log(arr4);
console.log(arr4);
console.log(arr4);
