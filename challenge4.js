
function count_vowel(str) {
    let count = 0;
    for (let char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    return count;
  }
  
  let res = count_vowel("sudipta");

  console.log(res);
  

//   using arrow func  
const arrowVow = (str) =>{
    let count = 0;
    for (let char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    return count;
}

let res2 = arrowVow("rftyuitdrgvwustyuio");
console.log(res2);