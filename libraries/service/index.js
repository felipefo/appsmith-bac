export default {




    async getAnimal(params) {
      var data  = rest.get("animal", params);
      return data;
    },
    async createAnimal(params) {
        var data  = rest.create("animal", params);
        return data;
      },

      async removeAnimal(params) {
        var data  = rest.remove("animal", params);
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







    extrairMensagensDeErro(obj, path = '') {
        let messages = [];
        for (const key in obj) {
            if (key === 'path' && obj[key] && obj['message']) {
                messages.push(`${obj['message']}`);
            }
            else if (typeof obj[key] === 'object' && obj[key] !== null) {
                const nextPath = path.length ? `${path}.${key}` : key;
                messages = messages.concat(this.extrairMensagensDeErro(obj[key], nextPath));
            }
        }

        return messages;
    },
    juntarMensagensDeErro(messages) {
        let mensagemConcatenada = '';
        for (let i = 0; i < messages.length; i++) {
            mensagemConcatenada += messages[i];
            if (i !== messages.length - 1) { 
                mensagemConcatenada += '\n';
            }
        }
        return mensagemConcatenada;
    },
    getErrorApi(apiError) {
        let messages = this.extrairMensagensDeErro(apiError);
        console.log(JSON.stringify(messages));
        messages = this.juntarMensagensDeErro(messages);
        return messages;
    },

    
    setUIError(apiError) {
        errorWidget.setText("");
        let message = this.getErrorApi(apiError);
        errorWidget.setText(message);
    },









    async getUrl(){
    var URL_PM = 'http:\/\/localhost:2337';
    var URL_LEDS = 'http:\/\/localhost:2337';
    if(this.getServidor() == "LEDS")
     return URL_LEDS; 
    else return URL_PM;
    
  },
    
  async getUrlApi() {
    var  URL_API_PM = "http:\/\/10.243.144.200:2337";
    var  URL_API_LEDS  =  "http:\/\/host.docker.internal:2337";
    if(this.getServidor() == "LEDS")
     return URL_API_LEDS; 
    else return URL_API_PM;
    
  },

  async getUrlAppSmith() {
    var URL_APP_SMITH_PM = "http:\/\/201.62.46.82";
    var URL_APP_SMITH_LEDS  = "http:\/\/localhost:2337";
    if(this.getServidor() == "LEDS")
     return URL_APP_SMITH_LEDS; 
    else return URL_APP_SMITH_PM;
    
  },

  async getHostDocker() {
    var HOST_DOCKER_PM = "http:\/\/host.docker.internal:2337";
    var HOST_DOCKER_LEDS  = "http:\/\/host.docker.internal:2337";
    if(this.getServidor() == "LEDS")
     return HOST_DOCKER_LEDS; 
    else return HOST_DOCKER_PM;
    
  },
  getServidor(){
    var servidor= localStorage.getItem("SERVIDOR");
    if(servidor == null)
        localStorage.setItem("SERVIDOR", "LEDS");
    else if (servidor == "LEDS")
        return "LEDS";
    else return "PM";
    return "LEDS";
},
setServidorLEDS(){
    localStorage.setItem("SERVIDOR", "LEDS");
},
setServidorPM(){
    localStorage.setItem("SERVIDOR", "PM");
}



}
 import rest from './util/RestService.js' 