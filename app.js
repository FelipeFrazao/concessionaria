"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var pessoa_1 = require("./pessoa");
var concessionaria_1 = require("./concessionaria");
//criar carros
var carroA = new carro_1.default("dodge journey", 4, 230);
var carroB = new carro_1.default("Veloster", 3, 200);
var carroC = new carro_1.default("BMW X4", 4, 280);
// montar lista de carros da concessionária
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new concessionaria_1.default("Avenida Rio Branco", listaDeCarros);
//exibir lista de carros
//console.log(concessionaria);
//comprar o carro
var cliente = new pessoa_1.default("José", "BMW X4");
//mostrar carro preferido
//console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
