
/*
Funcoes para pegar as informacoes de qual servidor esta send utilizado atualmente.
@author: Felipe Frechiani de Oliveira
*/


export default {

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

};
