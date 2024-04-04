export default {




    async getAnimal(params) {
      var data  = rest.get("animal", params);
      return data;
    },
    async createAnimal(params) {
        var data  = rest.create("animal", params);
        return data;
      },
  
  






  async getCondutor(params) {
    var data  = rest.get("condutor", params);
    return data;
  },
  async createCondutor(params) {
    var data  = rest.create("condutor", params);
    return data;
    },




}
 import rest from './util/RestService.js' 