let heading = document.querySelector("h2")
console.dir(heading.innerText);
// let h = hedding.append(" From Roy");
// heading.innerText = heading.innerText + " kanar ghorer kana"
heading.append(" from roY")


let divs = document.querySelectorAll(".box");
console.dir(divs[0])

// divs[0].innerText = "Mr.";
// divs[1].innerText ="ROY";
// divs[2].innerText = "hehe";

let idx = 1;
for(div of divs){
    // console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    idx++;
}