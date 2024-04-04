// Importa a função que deseja testar
//import api from './util/fetch.js';
import animal from './entity/animal.js';

// Chama a função com alguns argumentos e verifica o resultado
let dados = await animal.getAnimal();
console.log(dados);

//const resultado1 = await animais.getAnimais();

var body = {
    "data": {
    "Nome": "animal 100",
    "Data_nascimento": "2024-04-03",
    "Sexo": "Macho",
    "Status": "Liberado para o trabalho",
    "Idade": 1,
    "Box": "10",
    "Status_geral": "Ativado"
  }
}



//let animal1 =  await animal.create(body);
