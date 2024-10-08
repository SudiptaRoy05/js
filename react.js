const showRecepione = true;

if (showRecepione) {
  console.log("Pizza");
} else {
  console.log("COKE");
}

// turnerry operator

showRecepione ? console.log("pizza") : console.log("Coke");

const id = 1;
const productName = "Mac";
const rating = 3;

const product = {
  id,
  productName,
  rating,
};
console.log(product);

const product2 = {
  discription: "fgdhsjkal",
  id,
  rating,
};

// const getProductTwoDesc = product2.discription;
// console.log(getProductTwoDesc);

const { discription } = product2;
console.log(discription);

const arr = [1, 2, 3];
let getArrFirstVal = arr[0];

console.log(getArrFirstVal);

const [arrayFirstelement, arraySecondelement, w, r] = arr;
console.log(arrayFirstelement, arraySecondelement, w, r);

// default parameters, apreads and rest operators
function multi(a = 2, b = 3) {
  console.log(a, b);
  return a * b;
}

console.log(multi());

const arr2 = [2, 4, 6, 8];
const arr3 = [1, 3, 5, 7];
console.log([43, ...arr2, 90, 56, ...arr3, 0]);

// rest parameters

function getInfo(a, ...c) {
  console.log(a, c);
  return "sudiptass";
}

console.log(getInfo(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5));

// map,  filter, find, some, every, include, indexof, findIndex

const personArr = [
  {
    name: "sudip",
    age: 25,
    country: "bd",
  },

  {
    name: "REDOS",
    age: 27,
    country: "IN",
  },

  {
    name: "sadhin",
    age: 26,
    country: "IN",
  },

  {
    name: "Adi",
    age: 24,
    country: "Np",
  },
];

let getAllNames = personArr.map((singlrPerson, index) => {
  console.log(singlrPerson, index);
  // return singlrPerson.name;
  return ` name is ${singlrPerson.name}, age is ${singlrPerson.age}, lives in ${singlrPerson.country}`;
});
console.log(getAllNames);

// find

// let getPersonFromIn = personArr.find((singlrPerson, index)=>{
//     return singlrPerson.country === "IN";
// })

// filter
let getPersonFromIn = personArr.filter((singlrPerson, index) => {
  return singlrPerson.country === "IN";
});

console.log(getPersonFromIn);

// some
// let checkSomeArrMethodWithExamples = personArr.some((singlrPerson,index)=>{
//     return singlrPerson.age > 250;
// });

// every
let checkSomeArrMethodWithExamples = personArr.every((singlrPerson, index) => {
  return singlrPerson.age > 20;
});

console.log(checkSomeArrMethodWithExamples);
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
// find index

let getIndexFromPersonFromNP = personArr.findIndex((singlrPerson, index) => {
  return singlrPerson.country === "Np";
});
console.log("The index is", getIndexFromPersonFromNP);

console.log("--------------------------------------------");

const fruit = ["apple", "banana", "orange"];

console.log(fruit.includes("apple"));
console.log(fruit.indexOf("banana"));

let getListOfPruductsElement = document.querySelector(".list-of-products");

function renderProducts(getProducts) {
  getListOfPruductsElement.innerHTML = getProducts
    .map((singlrProduct) => `<p>${singlrProduct.title}</p>`)
    .join(" ");
}

async function fetchListOfProducts() {
  try {
    const apiResponce = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await apiResponce.json();
    console.log(result);
    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (e) {
    console.log(e);
  }
}

fetchListOfProducts();
