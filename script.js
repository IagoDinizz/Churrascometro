


    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");

    let resultado = document.getElementById("resultado");



function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne =  carnePP(duracao) * adultos + (carnePP(duracao)  * criancas / 2);
    let qtdcerveja =  cervejaPP(duracao) * adultos;
    let qtdbebidas =  bebidasPP(duracao) * adultos + (bebidasPP(duracao)  * criancas / 2);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${qtdcerveja / 1000}L de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdbebidas / 1000}L de Bebidas</p>`

}


function carnePP(duracao){
    

    if (duracao >= 6){
       return 650;
    } else{
       return 400;
    }
}

function cervejaPP(duracao){
    

    if (duracao >= 6){
       return 2000;
    } else{
       return 1200;
    }
}

function bebidasPP(duracao){
    

    if (duracao >= 6){
       return 1500;
    } else{
       return 1000;
    }
}