let marks = [76, 98, 68, 95, 54]
let sum = 0;

for(let val of marks){
    console.log("value",val);
    sum+=val;
}

console.log("total number",sum)
let avg = sum / marks.length
console.log(`avg marks of the class = ${avg}`);