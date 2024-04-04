/*
Responsavel por implementar toda a comunicação com o backend para entidade animal.
@author: Felipe Frechiani de Oliveira

*/

export default  {


      async get(rota, params) {
        //todo remover essa repeticao em todos os metodos. 
        if (rota === '') {
          throw new Error('Parâmetro de rota para o serviço não definido. Por favor, chame restService antes.');
        }
        rota = rotas.get(rota);
        let dados;
        if (params) {
          dados = await api.getRequest(config.generateURL() + rota);
        } else {
          dados = await api.getRequest(config.generateURL() + rota, params);
        }
        console.log(dados);
        return dados;
      },
    
      async create(rota, body) {
        if (this.rota === '') {
          throw new Error('Parâmetro de rota para o serviço não definido. Por favor, chame restService antes.');
        }
        rota = rotas.get(rota);
        const dados = await api.postRequest(config.generateURL() + rota, body);
        //console.log(dados);
        return dados;
      },
    
      async remove(rota, id) {
        rota = rotas.get(rota);
        const dados = await api.deleteRequest(config.generateURL() + rota + '/' + id);
        return dados;
      },
      
      async update(rota, id, body) {
        rota = rotas.get(rota);
        const dados = await api.putRequest(config.generateURL() + rota + '/' + id, body);
        return dados;
      },

    
  
    }
        

//para ter uma nova rota disponivel basta adicionar a roda no mapa abaixo.
const rotas = new Map();
rotas.set('animal', '/api/animals');
rotas.set('condutor', 'api/condutor');

import api from './fetch.js';
import config from './configuration.js';
