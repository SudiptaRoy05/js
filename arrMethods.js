// array methods 

let items = ["potato","apple","tomato","lichi","mango","orange"]
console.log(items);



let marks = [76, 56, 66, 97, 43];

console.log(marks);
console.log(marks.toString());

// toString() method is used convert an array into string  
console.log(items.toString());

// push() method is used to add item inthe last of a array
// items.push("jackfruit");

// pop() method is used to delete last item of a array 
// pop() method also return deleted value 
let deletedItem = items.pop();

console.log(deletedItem);
console.log(items);



// concat() method is used to joins multiple rrays and return result 
let marvel_heros = ["captain","iron","thor","hulk"];
let dc_heros = ["super", "bat", "joker", "flash"];
let bd_heros = ["heroAlom", "jahedKhan"];

let heros = marvel_heros.concat(dc_heros, bd_heros);
console.log(heros);


// unshift() method is the same as push() method but unshift() add element in starting 
marvel_heros.unshift("spider");
console.log(marvel_heros)

// shift() is same as pop but it delete element from the starting 

let del = dc_heros.shift();
console.log(`del value = ${del}`)
console.log(dc_heros);


// slcie method 
let fruit = ["potato","apple","tomato","lichi","mango","orange"]
console.log(fruit.slice(1, 4));



// splice() method 

let num = [1,2,3,4,5,6,7,8,9]
num.splice(2,3, 43, 54);
num.splice(2,0,3,4);
console.log(num)


// we can use splice method for add element delete element or replece element 