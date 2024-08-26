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

let para = document.querySelector("p");
para.remove();