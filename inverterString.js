function inverteString(palavra){
   
    
    let reverso = [];
    
    for(let k = palavra.length - 1; k >= 0; k --){
            reverso.push(palavra[k]);
        }

    return reverso;
}

console.log(inverteString("nirvana"));