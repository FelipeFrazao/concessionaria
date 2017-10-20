import Veiculo from "./veiculo"
class Moto extends Veiculo {
    public acelerar(): void {
        this.velocidade = this.velocidade + 20;
    };
    constructor (modelo: string, velocidade: number) {
        super();
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
}
export default Moto;