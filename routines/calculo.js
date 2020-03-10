function calcularPorcentagem(d1, d2, porc){
    var media;
    if(n1 <= || n2 !== null){
        media = (n1+n2)/2;
    }
    else if (n1 !== null && sch !== null){
        media = (n1+sch)/2;
    }
    else if (n2 !== null && sch !== null){
        media = (n2+sch)/2;
    }
    else if (n1 === null && n2 === null && sch !== null){
        media = sch/2;
    }
    if (media >=3 && media <7  && n1 !== null && n2 !== null && sch === null && fn !== null){
        media = (media+fn)/2
    }
    return media;
}

module.exports.calcularMedia = calcularMedia;

