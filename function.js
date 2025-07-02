function reverseString(str) {
  return str.split("").reverse().join();
}

function replace(str, charToReplace, strReplacement) {
  const result = str.replaceAll(charToReplace, strReplacement);
  // console.log(result);
  return result;
}
replace("hello", "l", "p");

function strLengthEven(str) {
  const result = str.length % 2 === 0;
  // console.log(result);
  return result;
}
strLengthEven("Hello");

function findRabbit(arr) {
  return arr.map((word) => word.toLowerCase()).indexOf("rabbit");
}

function subtractTen(num) {
  return num - 10;
}

//Changing century from year
function century(year) {
  return Math.ceil(year / 100);
}
// console.log(century(1996));

//Checking the end from the string
function solution(str, ending) {
  return str.endsWith(ending);
}
// console.log(solution("hello everybody", "ody"));

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
// console.log(lovefunc(10, 12));

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
// console.log(digitize(12345));

// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}
// console.log(findShort("the quick brown fox jumped over the lazy fox"));

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr(n, s) {
  return `${s.repeat(n)}`;
}
// console.log(repeatStr(5, "hello"));

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  const sum = array.reduce(
    (accumalator, currentValue) => accumalator + currentValue,
    0
  );
  const average = sum / array.length;
  return average;
}
// console.log(findAverage([1, 2, 3, 4, 5]));

// https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
function greet() {
  return ["hello", "world!"].join(" ");
}
// console.log("hi", "karma");

function squaredDigits(num) {
  return num.toString().split("");
}
console.log(squaredDigits(1234));

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
  const x = num.toString().split("");
  const y = x.map(Number);
  const z = [];
  for (let i = 0; i < y.length; i++) {
    z.push(y[i] * y[i]);
    //   console.log(z)
  }
  const n = z.join("");
  const m = Number(n);
  return m;
}
// console.log(squareDigits(1233));
