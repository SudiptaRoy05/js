let arr = [2,3,4,5,6,7,8,50,99,53];



let newArr = arr.map((val) => {
    return val**2;
})

console.log(newArr)



let newArr1 = arr.filter(val => {
    // return val % 2 !== 0;
    return val > 3;
})
console.log(newArr1);


const sum = arr.reduce((result, current) => {
    return result+current;
})

console.log(`the sum is ${sum}`);

const max = arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
})
console.log(max);