export default{

 sum(a, b) {
  return a + b;
},

teste(){
	
},
 async  getAnimais(){
	
// URL da API que retorna JSON
  const apiUrl = 'http://localhost:2337/api/animals';
 // showAlert(apiUrl);
 // Função para fazer a requisição usando Fetch API
 // Faz a requisição para a API usando fetch()
  var data;
 // console.log('Starting...')
  try{
	  
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
	//  showAlert(error.message);
      throw new Error(error.message);
    });
  }
  catch(error){
	  //showAlert(error);
	  throw new Error(error);
  }
  //console.log(dados);
	return dados; 
}


// Exporte a função toUpperCase para ser utilizada em outros arquivos

};



