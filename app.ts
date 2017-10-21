import Carro from "./carro";
import Pessoa from "./pessoa";
import Moto from "./moto";
import { Dao } from "./dao";
import Concessionaria from "./concessionaria";

//criar carros
let carroA = new Carro("dodge journey", 4, 230);
let carroB = new Carro("Veloster", 3, 200);
let carroC = new Carro("BMW X4", 4, 280);

// montar lista de carros da concessionária
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Avenida Rio Branco", listaDeCarros);

//comprar o carro
let cliente = new Pessoa("José", "BMW X4");

let moto = new Moto("RR 1100", 300);

//mostrar carro preferido
concessionaria.mostrarListaDeCarros().map((carro: Carro)=> {
    if (carro["modelo"] == cliente.dizerCarroPreferido()){
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});

let daoC: Dao<Concessionaria> = new Dao<Concessionaria>();
let daoP: Dao<Pessoa> = new Dao<Pessoa>();
let daoM: Dao<Moto> = new Dao<Moto>();

console.log(cliente.dizerCarroQueTem());
console.log(concessionaria.fornecerHorariosDeFuncionamento());
daoC.inserir(concessionaria);
daoP.inserir(cliente);
