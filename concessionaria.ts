import { ConcessionariaInterface } from "./concessionariaInterface";
import Carro from "./carro";
export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    };
    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    };
    public fornecerHorariosDeFuncionamento(): string {
        return "Segunda a sexta das 08:00 as 17:00";
    }
}