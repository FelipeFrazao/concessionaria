export default class Carro {
    private modelo : string;
    private numPortas: number;
    private velocidade: number = 0;
    constructor (modelo: string, numPortas: number, velocidade: number ) {
        this.modelo = modelo;
        this.numPortas = numPortas;
        this.velocidade = velocidade;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    };
    public  parar(): void {
        this.velocidade = 0;
    };
    public velocidadeAtual(): number {
        return this.velocidade;
    };
}

