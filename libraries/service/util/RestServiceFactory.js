
const getService = async (entity, method) => {
  
    if(rotas.get(entity)){
        const rota = rotas.get(entity);
        let rest = new RestService(rota);
        if(method == "GET" )
            return await rest.get();
        else(method == "POST" )
            return await rest.create();
    }
    
};




import RestService from './RestService.js';

//para ter uma nova rota disponivel basta adicionar a roda no mapa abaixo.
const rotas = new Map();
rotas.set('animal', '/api/animals');
rotas.set('condutor', 'api/condutor');

export default { getService };
