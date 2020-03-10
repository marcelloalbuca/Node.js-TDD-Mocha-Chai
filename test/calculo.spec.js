var chai = require("chai");
var expect = chai.expect;
var Porcentagem = require("../routines/calculo");

describe("Porcentagem dias de atraso", ()=> {
    describe("Apenas notas de unidade", () => {

        it(" 1 atraso = 10 dias; ", () => {
            expect(Porcentagem.calcularPorcentagem(10)).to.equal(0.05);

        })

        it(" 2 atraso = 15 dias ; ", () => {
            expect(Porcentagem.calcularPorcentagem(15)).to.equal(0.05);

        })

        it(" 3 atraso = 31 dias; ", () => {
            expect(Porcentagem.calcularPorcentagem(31)).to.equal(0.10);

        })

        it(" 4 atraso = 60 dias; ", () => {
            expect(Porcentagem.calcularPorcentagem(60)).to.equal(0.10);

        })

        it(" 5 atraso = 61 dias; ", () => {
            expect(Porcentagem.calcularPorcentagem(61)).to.equal(0.15);

        })

        it(" 6 atraso = 76 dias; ", () => {
            expect(Porcentagem.calcularPorcentagem(76)).to.equal(0.15);

        })

    })

})