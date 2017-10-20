"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDao = (function () {
    function ConcessionariaDao() {
        this.nomeTabela = "tb_concessionaria";
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log(object);
        return true;
    };
    ;
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log(object);
        return true;
    };
    ;
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("delete");
        return new concessionaria_1.default('', []);
    };
    ;
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log("select");
        return new concessionaria_1.default('', []);
    };
    ;
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log("All");
        return [new concessionaria_1.default('', [])];
    };
    ;
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
