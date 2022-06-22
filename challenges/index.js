//challenge

const array = [3, 6, 5];
const newArray = map(array, (num) => num * num);

function map(arr, callback) {
  const emptyArr = [];
  for (let i = 0; i < arr.length; i++) {
    const num = callback(arr[i]);
    emptyArr.push(num);
  }
  return emptyArr;
}

console.log(newArray);
