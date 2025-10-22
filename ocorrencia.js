function ocorrenciaNuemros(arr){
    const frequencia = {};

    for(let i = 0; i < arr.length; i ++){

        const elemento = arr[i];

        if(frequencia[elemento]){
            frequencia[elemento] += 1;
        }else{
            frequencia[elemento] = 1;
        }
    }

    return frequencia;
}

const arrNum = [10, 10, 15, 12, 15, 10];

console.log(ocorrenciaNuemros(arrNum));

