function palindromo(palavra){

    let encontrada = {
    status: true,
    dados: "É um palíndromo!"
};
    let tamanho = palavra.length;

    let i = palavra.length - 1;

    let verificar = palavra.toLowerCase();
    
    for(let k = 0; k < tamanho / 2; k ++){
        if(verificar[k] !== verificar[i]){
            encontrada.status = false;
            encontrada.dados = "Não é um palindromo";
            break;
        }
        i --;
    }

    return encontrada;


}

console.log(palindromo("arara"));