function fibonacci(n) {
    if (n <= 0) {
        return "N deve ser maior que 0";
    }
    
    
    const sequencia = [];
    let anterior1 = 0; 
    let anterior2 = 1; 
    
    
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequencia.push(anterior1);
        } else if (i === 1) {
            sequencia.push(anterior2);
        } else {
            
            let proximo = anterior1 + anterior2;
            sequencia.push(proximo);
            
            
            anterior1 = anterior2;
            anterior2 = proximo;
        }
    }
    
    
    console.log(sequencia.join(', '));
    return sequencia;
}


fibonacci(8); 