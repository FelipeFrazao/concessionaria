import Veiculo from "./veiculo"
class Moto extends Veiculo {
    constructor (modelo: string, velocidade: number) {
        super();
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
}
export default Moto;