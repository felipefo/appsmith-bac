/*
Responsavel por configurar as informações de configuração da API
@author: Felipe Frechiani de Oliveira

*/


const domain =  'http://localhost';
const port = 2337;

function generateURL() {
    return domain +":" + port;
}

export default { generateURL };