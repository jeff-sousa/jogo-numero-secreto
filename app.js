listaDeNumeroSorteado = [];
let numeroLimite = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
  
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero Secreto');
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite}`);
    exibirTextoNaTela('h2', '');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativa = `Você descobriu o numero ${numeroSecreto} depois te ${tentativas} ${palavraTentativa}`
    if(chute == numeroSecreto){
        exibirTextoNaTela('h2', ' ACERTOU !!!')
        exibirTextoNaTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){ 
            exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`)
        } else{
            exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`)
        }
    }
    tentativas ++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoLista =  listaDeNumeroSorteado.length;

    if(quantidadeDeElementoLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }
    if(listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}