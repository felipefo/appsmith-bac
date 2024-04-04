/*
Entry point do projeto, favor, importar os novos metodos nela para ficarem disponiveis da lib
@author: Felipe Frechiani de Oliveira
*/

export default {

  async getCondutor(params) {
    var data  = rest.get("condutor", params);
    return data;
  },
  async createCondutor(params) {
    var data  = rest.create("condutor", params);
    return data;
    },
};


import rest from '../util/RestService.js';
