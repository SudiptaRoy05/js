let marks = [76, 56, 66, 97, 43];

console.log(marks);
console.log(marks.length);
console.log(marks[0]);
marks[2] = 75;
console.log(marks)


let heros = ["ironman", "hulk", "thor", "antman", "batman", "spiderman"];
// console.log(heros);
// console.log(heros.length);
// console.log(typeof(heros));

//foor loop
for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}


// ............................................
// for off loop

for (let hero of heros) {
    console.log(hero.toUpperCase());
}


console.log("-----------------------")

let cities = ["dhaka","gopalganj","barishal","sylhet"];


for(let city of cities){
    console.log(city.toUpperCase());
}




// ....................................................

