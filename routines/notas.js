function calcularMedia(n1, n2, sch){
    var media;
    if(n1 !== null && n2 !== null){
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
}