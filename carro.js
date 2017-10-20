"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = (function () {
    function Carro(modelo, numPortas, velocidade) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numPortas = numPortas;
        this.velocidade = velocidade;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    ;
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    ;
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    ;
    return Carro;
}());
exports.default = Carro;
