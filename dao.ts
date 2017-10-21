import { DaoInterface } from "./daoInterface";
export class Dao<T> implements DaoInterface<T> {
    nomeTabela = "";
    inserir(object: T): boolean {
        console.log(object);
        return true;
    };
    atualizar(object: T): boolean {
        console.log(object);
        return true;
    };
    remover(id: number): T {
        console.log("delete");
        return Object();
    };
    selecionar(id: number): T {
        console.log("select");
        return Object();
    };
    selecionarTodos(): [T] {
        console.log("All");
        return [Object()];
    };
}