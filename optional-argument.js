const square = (x)=>{
    return x*x;
}
let result = square(4, true, "hydgud");
console.log(result);

function minus(a,b){
    if(b === undefined) return -a;
    else return a - b;
}
let result1 = minus(2);
let result2 = minus(90, 43);

console.log(result1);
console.log(result2);
