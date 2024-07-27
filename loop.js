// let num = 1;
// while(num < 12){
//     console.log(num);
//     num = num+2;
// }


// let result = 1;
// let counter = 0;

// while (counter < 10){
//     result = result*2;
//     console.log(result);
//     counter++;
//     console.log(counter);
// }
// console.log(result);


// let yourName;

// do{
//     yourName = prompt("enter your name");
// }while(!yourName);
// console.log(yourName);


// breaking out of a for loop
// for(let c = 20; ; c++){
//     if(c % 7 == 0){
//         console.log(c);
        
//         break;
//     }
    
// }


let str = "sudipta";
let size = 0;

for (let val of str) {
    console.log("value =", val)
    size++;
}

console.log(size)


let student ={
    name : "sudipta",
    age : 25,
    isPass : true
}

for (const key in student) {
   console.log( key,"=", student[key])
}


for(let i = 1; i<=100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}