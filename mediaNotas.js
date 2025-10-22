function calculaMedia(arr){
    let notas = arr.length;
    
    let nota = arr[0];

    for(let i = 1; i < arr.length; i ++){

        nota += arr[i];

    }
    let media = nota / notas;
    return media;
}

const not = [10, 2, 10, 30];

console.log(calculaMedia(not));