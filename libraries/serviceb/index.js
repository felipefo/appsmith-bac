
export default {
// index.js

teste(){
	
},
 async getAnimais(){
	
// URL da API que retorna JSON
  const apiUrl = 'http://localhost:2337/api/animals';
 // Função para fazer a requisição usando Fetch API
 // Faz a requisição para a API usando fetch()
 
  var dados = await fetch(apiUrl)
    .then(response => {
      // Verifica se a resposta da requisição é bem-sucedida (status 200)
      if (!response.ok) {
        throw new Error('Erro ao carregar os dados');
      }
      // Se a resposta for bem-sucedida, retorna os dados no formato JSON
      return response.json();
    })
    .then(data => {
      // Manipula os dados recebidos
      console.log('Dados recebidos:', data);
      // Aqui você pode processar os dados como desejar
	  return data;
    })
    .catch(error => {
      // Captura qualquer erro ocorrido durante a requisição
      console.error('Erro:', error.message);
    });
	return dados; 
}


// Exporte a função toUpperCase para ser utilizada em outros arquivos

};
