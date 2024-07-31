let arr = [87,98,67,45,87,84,56,78];

let nAr = arr.filter((val) => {
    return val > 85 ;
})

console.log(nAr);

let n = prompt("enter any number");

let arr1 = [];
for(let i = 1; i <= n; i++){
    arr1[i-1] = i;
}
console.log(arr1);

let res = arr1.reduce((prev, curr) => {
    return prev+curr;
})
console.log("Sum is =",res)


let factorial = arr1.reduce((res,cur) => {
    return res*cur;
})
console.log("factorial =", factorial);