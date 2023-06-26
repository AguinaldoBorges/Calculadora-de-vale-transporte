async function calcular() {
    /* Variáveis */
    let valorOnibus = document.querySelector('#onibus').value;
    let quantidadeOnibus = document.querySelector('#onibusIntegracao').value;
    let valorTrilhos = document.querySelector('#trilhos').value;
    let quantidadeTrilhos = document.querySelector('#trilhosIntegracao').value;
    let bilheteDeEstudante = document.querySelector('#bilheteEstudante').value;
    let diasDeUso = document.querySelector('#diasDeUso').value;

    /* previnir o uso da , no número */
    if (valorOnibus === null || valorOnibus === '') {
        valorOnibus = 0;
    }else{
        valorOnibus = parseFloat(valorOnibus.replace(/,/g, "."))
    }

    if (valorTrilhos === null || valorTrilhos === '') {
        valorTrilhos = 0;
    }else{
        valorTrilhos = parseFloat(valorTrilhos.replace(/,/g, "."))
    }

    /* previnir caso a variavel diasDeUso uso sejam nullo ou vazio */
    if (diasDeUso === null || diasDeUso === '') {
        diasDeUso = 0;
    }

    /* verifica se é integração */
    if (quantidadeOnibus === 'Sim') {
        valorOnibus = valorOnibus / 2;
    }else{
        valorOnibus = parseFloat(valorOnibus)
    }

    if (quantidadeTrilhos === 'Sim') {
        valorTrilhos = valorTrilhos / 2;
    }else{
        valorTrilhos = parseFloat(valorTrilhos)
    }

    /* Calcula o valor total por dia */
    const valorPorDia = (valorOnibus + valorTrilhos) * 2;

    /* Calcula o resultado */
    let resultado;

    if (bilheteDeEstudante === 'Sim') {
        resultado = (valorPorDia / 2) * parseInt(diasDeUso);
    } else {
        resultado = valorPorDia * parseInt(diasDeUso);
    }

    if(resultado === 0){
        resultado = `${resultado},00`
    }

    /* Exibe o valor no h1 da página */
    let elementoH1 = document.querySelector('#resultado');

    elementoH1.textContent = `R$ ${resultado.toFixed(2)}`;
}