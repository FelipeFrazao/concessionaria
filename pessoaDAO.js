"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var PessoaDAO = (function () {
    function PessoaDAO() {
        this.nomeTabela = "tb_pessoa";
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log(object);
        return true;
    };
    ;
    PessoaDAO.prototype.atualizar = function (object) {
        console.log(object);
        return true;
    };
    ;
    PessoaDAO.prototype.remover = function (id) {
        console.log("delete");
        return new pessoa_1.default("Felipe", "BMW X4");
    };
    ;
    PessoaDAO.prototype.selecionar = function (id) {
        console.log("select");
        return new pessoa_1.default("Felipe", "BMW X4");
    };
    ;
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log("All");
        return [new pessoa_1.default("Felipe", "BMW X4")];
    };
    ;
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
