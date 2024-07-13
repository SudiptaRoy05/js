let items = [250, 645, 300, 900, 60]


// using for loop

for(let i = 0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items)



// using forOF loop  

let items2 = [250, 645, 300, 900, 60]

let i = 0;
for(let val of items2){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items2[i] = items2[i] - offer;
    console.log(`value after offer = ${items2[i]}`)
    i++;
}

console.log(items2)