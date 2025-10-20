function verificaNumero(n1, n2){
    if(n1 > n2){
        return ` maior é: ${n1}`;
    }else if (n2 > n1){
        return ` maior é ${n2}`;
    }else{
        return "Números com valores iguais";
    }
}