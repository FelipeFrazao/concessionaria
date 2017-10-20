import Veiculo from "./veiculo"
export default class Carro extends Veiculo {
    private numPortas: number;

    constructor (modelo: string, numPortas: number, velocidade: number ) {
        super();
        this.modelo = modelo;
        this.numPortas = numPortas;
        this.velocidade = velocidade;
    }
}

