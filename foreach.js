// function greet(){
//     console.log("Hello")
// }

// function myFunc(greet){
//     return greet;
// }


let arr = [1,2,3,4,5];
arr.forEach((val1, index, arr) =>{
    console.log(val1, index, arr);
})
let arr2 = ["hjkl", "fgfds", "wertg", "qwert"] 
arr2.forEach((val, idx, arr1) =>{
    console.log(val.toUpperCase(), idx, arr1);
})