function chicken(){
    console.log("egg")
    return egg();
}

function egg(){
    console.log("chicks")
    return chicken();
}

console.log(chicken() + "came first");