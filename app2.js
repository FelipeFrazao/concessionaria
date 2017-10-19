"use strict";
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
var Concessionaria = (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    ;
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    ;
    return Concessionaria;
}());
var Pessoa = (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    ;
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    ;
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    ;
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    ;
    return Pessoa;
}());
var pessoa = new Pessoa('José ', "Chevet");
console.log(pessoa.dizerCarroPreferido());
