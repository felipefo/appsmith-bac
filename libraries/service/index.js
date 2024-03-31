export default {
  async getAnimais() {
    let dados = fetchapi.fetchapi('http://localhost:2337/api/animals/', "");
    console.log(dados);
  },
  async createAnimal() {

    console.log("TODO"); a
  },

  async cremoveAnimal() {

    console.log("TODO");
  },

  async updateAnimal() {

    console.log("TODO");
  },

};

import fetchapi from './fetch.js';


