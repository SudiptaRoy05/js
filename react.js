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
  rating
};
console.log(product);


const product2 = {
    discription : 'fgdhsjkal',
    id,
    rating
}

// const getProductTwoDesc = product2.discription;
// console.log(getProductTwoDesc);

const {discription} = product2;
console.log(discription); 



const arr = [1,2,3];
let getArrFirstVal = arr[0];

console.log(getArrFirstVal);


const [arrayFirstelement, arraySecondelement, w, r] = arr; 
console.log(arrayFirstelement, arraySecondelement, w, r);


// default parameters, apreads and rest operators 
function multi(a = 2,b = 3){
    console.log(a, b)
    return a*b;
}

console.log(multi(5,8));