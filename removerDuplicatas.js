function removeDuplicata(arr){

    const elementosVistos = {};

    const elementosUnicos = [];

    

    for(let i = 0; i < arr.length; i++){
        let elementoAtual = arr[i];

        if(!elementosVistos[elementoAtual]){

            elementosUnicos.push(elementoAtual);
            elementosVistos[elementoAtual] = true;
        }
            
        
    }
    return elementosUnicos;
}

const arrDup = [10,10, 5,5, 1];

console.log(removeDuplicata(arrDup));