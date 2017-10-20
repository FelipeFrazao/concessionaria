import { DaoInterface } from "./daoInterface";
import Concessionaria from "./concessionaria";
export class ConcessionariaDao implements DaoInterface {
    nomeTabela = "tb_concessionaria";
    inserir(object: Concessionaria): boolean {
        console.log(object);
        return true;
    };
    atualizar(object: Concessionaria): boolean {
        console.log(object);
        return true;
    };
    remover(id: number): Concessionaria {
        console.log("delete");
        return new Concessionaria('', []);
    };
    selecionar(id: number): Concessionaria {
        console.log("select");
        return new Concessionaria('', []);
    };
    selecionarTodos(): [any] {
        console.log("All");
        return [new Concessionaria('', [])]
    };
}