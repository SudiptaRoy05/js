j = " ";

for(let i = 0; i< 8; i++){
    for(let k=0; k<8; k++){
        if(j.length !== 9){
            if(j.length%2 === 0){
            j += "*";
            
            }
            else{
            j += "#";
            }
        }
       
    }   
}

console.log(j)
