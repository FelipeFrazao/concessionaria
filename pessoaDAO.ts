import { DaoInterface } from "./daoInterface";
import Pessoa from "./pessoa";
export class PessoaDAO implements DaoInterface {
    nomeTabela = "tb_pessoa";
    inserir(object: Pessoa): boolean {
        console.log(object);
        return true;
    };
    atualizar(object: Pessoa): boolean {
        console.log(object);
        return true;
    };
    remover(id: number): Pessoa {
        console.log("delete");
        return new Pessoa("Felipe", "BMW X4");
    };
    selecionar(id: number): Pessoa {
        console.log("select");
        return new Pessoa("Felipe", "BMW X4");
    };
    selecionarTodos(): [any] {
        console.log("All");
        return [new Pessoa("Felipe", "BMW X4")];
    };
}