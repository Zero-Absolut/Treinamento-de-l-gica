function contarVolgal(palavra){

    let contador = 0;

    for (let i = 0; i < palavra.length; i ++){
        if(palavra[i] === 'a' || palavra[i] === 'A' ||
           palavra[i] === 'e' || palavra[i] === 'E' ||
           palavra[i] === 'i' || palavra[i] === 'I' ||
           palavra[i] === 'o' || palavra[i] === 'O' ||
           palavra[i] === 'u' || palavra[i] === 'U'
        ){
            contador += 1;
        }
    }
    return contador;
}

console.log(contarVolgal("teste"));