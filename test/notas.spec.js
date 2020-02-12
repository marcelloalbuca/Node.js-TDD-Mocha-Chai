var chai = require("chai");
var expect = chai.expect;
var Media = require("../routines/notas");

describe("Calcular Média", ()=> {
    describe("Apenas notas de unidade", () => {
        it("1 Unid = 7; 2 Unid = 9; Média = 8;", () => {
            expect(Media.calcularMedia(7,9)).to.equal(8);

        })
    })
})