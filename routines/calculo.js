function calcularPorcentagem(d1){
    var porcentagem;
    if(d1 <= 30){
        porcentagem = 0.05;
    }
    else if (d1 >= 31 || d1 <= 60){
        porcentagem = 0.10;
    }
    if (d1 > 60 ){
        porcentagem = 0.15;
    }

    return porcentagem;
}

module.exports.calcularPorcentagem = calcularPorcentagem;

