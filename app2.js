"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var moto_1 = require("./moto");
var carro = new carro_1.default('Veloster', 3, 200);
var moto = new moto_1.default();
moto.acelerar();
console.log(carro);
console.log(moto);
