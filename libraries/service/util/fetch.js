
/*
Responsavel acesso basico de post, get, put e delete via fetch
@author: Felipe Frechiani de Oliveira

*/

const postRequest = async (url, body) => {
  try {
      return await fetchapi(url, 'POST', body);
  } catch (error) {
      //console.error('Erro ao fazer a solicitação POST:', error);
      throw error;
  }
};


const putRequest = async (url, body) => {
  try {
      return await fetchapi(url, 'PUT', body);
  } catch (error) {
      //console.error('Erro ao fazer a solicitação PUT:', error);
      throw error;
  }
};


const deleteRequest = async (url) => {
  try {
      return await fetchapi(url, 'DELETE');
  } catch (error) {
      //console.error('Erro ao fazer a solicitação DELETE:', error);
      throw error;
  }
};

const getRequest = async (url, params = null) => {
  try {
      // Se houver parâmetros, adiciona-os à URL
      //const fullUrl = params ? `${url}?${new URLSearchParams(params)}` : url;
      let dados = await fetchapi(url, 'GET');
      return dados;
  } catch (error) {
      //console.error('Erro ao fazer a solicitação GET:', error);
      throw error;
  }
};


const fetchapi = async (url, method, body = null) => {
  // Função para fazer a requisição usando Fetch API
  // Faz a requisição para a API usando fetch()
  let response;
       response = await fetch(url, {
          method: method,
          headers: {
              'Content-Type': 'application/json'
          },
          body: body ? JSON.stringify(body) : null
      });

      // Verifica se a resposta da requisição é bem-sucedida (status 200)
      if (!response.ok) {
          let error = await response.json();
          throw new Error( JSON.stringify(error));
      }
      // Se a resposta for bem-sucedida, retorna os dados no formato JSON
      const data = await response.json();
      console.log('Dados recebidos:', data);
      return data;
};

export default { getRequest , postRequest , putRequest, deleteRequest, fetchapi };


   
   
   
   