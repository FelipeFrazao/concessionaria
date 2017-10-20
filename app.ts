import Carro from "./carro";
import Pessoa from "./pessoa";
import Concessionaria from "./concessionaria";

//criar carros
let carroA = new Carro("dodge journey", 4, 230);
let carroB = new Carro("Veloster", 3, 200);
let carroC = new Carro("BMW X4", 4, 280);

// montar lista de carros da concessionária
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Avenida Rio Branco", listaDeCarros);

//exibir lista de carros
//console.log(concessionaria);

//comprar o carro
let cliente = new Pessoa("José", "BMW X4");

//mostrar carro preferido
//console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro: Carro)=> {
    if (carro["modelo"] == cliente.dizerCarroPreferido()){
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());