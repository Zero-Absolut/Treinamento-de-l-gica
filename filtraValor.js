function filtraValorArr(arr){

    let menor = arr[0];
    let maior = arr[0];


    for(let i = 1; i < arr.length; i ++){
        let elementoatual = arr[i];

        if(elementoatual > maior){
            maior = elementoatual;
        }
        if(elementoatual < menor){
            menor = elementoatual;
        }
    }

    return {menor, maior};



}

let numeros = [10, 150, 1, 0, 250];

console.log(filtraValorArr(numeros));