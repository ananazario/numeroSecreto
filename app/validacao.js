function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido </div>'
        return
    } 
    
    else if (numeroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += 
        `<div>
            O valor precisa estar entre os números ${menorValor} e ${maiorValor}
        </div>`
        return
    }

    else if (numero === numeroSecreto) {
        document.body.innerHTML = 
        `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>
        <button class="btnJogar" id="jogarNovamente">Jogar novamente?</button>
        `
    }

    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += 
        `<div>
            O número secreto é menor
            <i class="fa-solid fa-arrow-down"></i>
        </div>`
    }

    else {
        elementoChute.innerHTML += 
        `<div>
            O número secreto é maior
            <i class="fa-solid fa-arrow-up"></i>
        </div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})

