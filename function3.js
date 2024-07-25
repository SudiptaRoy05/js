function power(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result = result*base;
    }
    return result;
}
let res = power(2,10);
console.log(res);

const powers =(b, e) => {
    let result1 = 1;
    for(let i = 0; i< e; i++){
        result1 = result1*b;
    }
    return result1;
}

let res1 = powers(5, 9);
console.log(res1)