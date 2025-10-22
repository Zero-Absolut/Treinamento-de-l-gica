function maiorZero(arr){

    const maior = [];

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > 0){
            maior.push(arr[i]);
        }
    }

    return maior;

}

const array = [10, -10, 5, -5, 22, -22];

console.log(maiorZero(array));