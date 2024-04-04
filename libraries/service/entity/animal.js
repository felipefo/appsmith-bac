/*
Entry point do projeto, favor, importar os novos metodos nela para ficarem disponiveis da lib
@author: Felipe Frechiani de Oliveira
*/

export default {

    async getAnimal(params) {
      var data  = rest.get("animal", params);
      return data;
    },
    async createAnimal(params) {
        var data  = rest.create("animal", params);
        return data;
      },
  };
  

import rest from '../util/RestService.js';
