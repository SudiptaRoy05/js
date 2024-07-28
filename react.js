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

console.log(multi());

const arr2 = [2,4,6,8];
const arr3 = [1,3,5,7]
console.log([43,...arr2,90,56, ...arr3,0]);


// rest parameters 


function getInfo(a,...c){

    console.log(a,c)
    return 'sudiptass'
}

console.log(getInfo(1,2,3,4,5,1,2,3,4,5,1,2,3,4,5))