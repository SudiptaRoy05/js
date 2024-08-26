let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn was clicked");
    let a = 25;
    a++;
    console.log(a);
}


let box1 = document.querySelector("#box1");

box1.onmouseover = () => {
    console.log("u r inside the div");
}