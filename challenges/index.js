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

//////challenge deux
//create an empty array
//loop through that array, grabbing the elements from the array
//

function filter(arr, callback) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    const num = callback(arr[i]);
    if (num === true) {
      array.push(arr[i]);
    }
  }
  return array;
}

console.log(filter([2, 6, 5], (n) => n % 2 === 0));
console.log("dog");

const addExcitement = addPunctuation("!!!");

function addPunctuation(punctuation) {
  return (x) => {
    return x + punctuation;
  };
}
console.log(addExcitement("Hello Cool World"));

function addFirst(element) {
  return (array) => {
    array.unshift(element);
    return array;
  };
}

const addOrange = addFirst("orange");
console.log(addOrange(["red", "blue", "green"]));
console.log(addOrange(["blue", "blue", "blue"]));
const addCat = addFirst("cat");
console.log(addCat(["dog", "bird", "lizard"]));
console.log(addCat(["lizard", "donkey", "whale"]));
