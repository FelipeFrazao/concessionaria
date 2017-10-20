import Carro from "./carro";
import Pessoa from "./pessoa";
import Moto from "./moto";
import { ConcessionariaDao } from "./concessionariaDao";
import { PessoaDAO } from "./pessoaDAO";
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

let daoC: ConcessionariaDao = new ConcessionariaDao();
let daoP: PessoaDAO = new PessoaDAO;

console.log(cliente.dizerCarroQueTem());
console.log(concessionaria.fornecerHorariosDeFuncionamento());
daoC.inserir(concessionaria);
daoP.inserir(cliente);
