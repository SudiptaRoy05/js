let btn = document.createElement("button");
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white"
document.querySelector("body").prepend(btn);


let p = document.querySelector("p");
p.classList.add("newPara");