let newBtn = document.createElement("button");
newBtn.innerText = "ClickMe"
console.log(newBtn);

let div = document.querySelector("div");
// div.prepend(newBtn);
// div.append(newBtn);
// div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi, I am new!</i>"
document.querySelector("body").prepend(newHeading);
document.querySelector("body").appendChild(newHeading) 

let para = document.querySelector("p");
para.remove();
// newHeading.remove();

// This doesn't append three paragraphs:
// the three elements will be nested instead of siblings
let p = document.body
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("p"));

  p.innerText = "Hi i am p!";

  let ids = document.createElement("div")

  ids.innerHTML = "<h3>hii</h3>"
  let sec = document.querySelector("section");
  sec.append(ids);
  