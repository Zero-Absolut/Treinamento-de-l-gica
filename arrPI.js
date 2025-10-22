function divideArray(arr){
    const retorno = {
        arrImp:[],
        arrPar:[]
    };
    
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] % 2 === 0){

            let par = arr.splice(i,1);

            retorno.arrPar.push(par[0]);

            i --;
        }
        
    }
    retorno.arrImp = arr;

    return retorno;
}

const numeros = [1, 2, 3, 4, 5, 6, 7];
const resultado = divideArray(numeros);

console.log(resultado);
