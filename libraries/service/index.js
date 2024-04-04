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
    var api = new Rest("condutor");
    var data =  await api.get(params);
    return data;
  },
  async createCondutor(params) {
      var api = new Rest("condutor");
      var data =  await api.create(params);
      return data;
    },




}
 import rest from './util/RestService.js' 