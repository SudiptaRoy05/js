function myFunc(msg, num) {
  console.log(msg, num);
}

myFunc("marbo kintu", 1234);
function sum(a, b) {
  total = a + b;
  console.log("first");
  return total;
  // console.log("second")
}

let val = sum(234, 234);

console.log(val);

// arrow function

const plus = (a, b) => {
  return a + b;
};

let v = plus(2, 3);
console.log(v);

console.log(plus);

const multi = (a, b) => {
  return a * b;
};

let mul = multi(2, 3);
console.log(mul);
