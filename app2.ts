class Carro {
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
class Concessionaria {
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
}
//classe pessoa
class Pessoa {
    private nome: string;
    private carroPreferido: string;
    private carro: string;

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome;
    };
    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    };
    public comprarCarro(carro: any): void {
        this.carro = carro;
    };
    public dizerCarroQueTem(): any {
        return this.carro;
    };
}

/*criar carros*/
let carroA = new Carro("dodge journey", 4, 230);
let carroB = new Carro("Veloster", 3, 200);
let carroC = new Carro("BMW X4", 4, 280);

// montar lista de carros da concessionária
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Avenida Rio Branco", listaDeCarros);

//exibir lista de carros
console.log(concessionaria);