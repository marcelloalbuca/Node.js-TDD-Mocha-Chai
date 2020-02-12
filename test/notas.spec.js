var chai = require("chai");
var expect = chai.expect;
var Media = require("../routines/notas");

describe("Calcular Média", ()=> {
    describe("Apenas notas de unidade", () => {
        it("1 Unid = 7; 2 Unid = 9; Média = 8;", () => {
            expect(Media.calcularMedia(7,9)).to.equal(8);

        })
        it("1 Unid = 3; 2 Unid = 5; Média = 4;", () => {
            expect(Media.calcularMedia(3,5)).to.equal(4);
        })

    })
    describe("Com segunda chamada", () => {
        it("1 Unid = 7; 2 Unid = null; seg = 9; Média = 8;", () => {
            expect(Media.calcularMedia(7, null, 9)).to.equal(8);
        })
        it("1 Unid = null; 2 Unid = 7; Média = 9;", () => {
            expect(Media.calcularMedia(null, 7, 9)).to.equal(8);
        })
        it("1 Unid = null; 2 Unid = null; Média = 8;", () => {
            expect(Media.calcularMedia(null, null, 8)).to.equal(4);
        })
    })
    describe("Com final", () => {
        it("1  media = 7; n1 = null ; n2 = null; fn = 9; media = 8;", () => {
            expect(Media.calcularMedia(7, null, 9)).to.equal(8);
        })
        it("1  media = 4; n1 = 6 ; n2 = null; fn = 8; media = 6.5", () => {
            expect(Media.calcularMedia(4, 6, null, 8)).to.equal(6.5);
        })
        it("1  media = 6; n1 = null ;  n2 = null ; fn = 8; media = 7", () => {
            expect(Media.calcularMedia(6, null, 8)).to.equal(7);
        })
    })

})