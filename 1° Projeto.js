alert('Boas Vindas as Jogo do número secreto'); 
let numeroMaximo = 5000;


let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)  //let = para armazenar as variaveis
console.log(numeroSecreto);
let chute;
let tentativas = 1 ;

// Operadores de comparação (Não é igual: != | Igual: == | Maior: > | Menor: <) 
// enquanto o chute não for igual
while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);  //prompt = Funciona de forma similar ao alert
    // se chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break;
       
        // Tudo dentro da Chave sera executado se o numero foi igual a variavel chute 
    } else{
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas +1;
        // para atribuir mais 1: ++ 
        tentativas++;
    }

}

 //operador ternario 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
//if(tentativas > 1) {
//    alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}else {
 //   alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
