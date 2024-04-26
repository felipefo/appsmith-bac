/*
Trata as mensagens de erro da api do strapi e exibe em um componento do appsmith 
para que a mensagem seja exibida, deve-se ter um componente padrão chamado de errorWidget, você também pode pegar a mensagem por meio 
do getErrorApi
@author: Felipe Frechiani de Oliveira
*/
export default {

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
            if (i !== messages.length - 1) { // Adiciona uma nova linha se não for a última mensagem
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

    // Função para percorrer a estrutura de dados JSON e extrair as mensagens de erro
    setUIError(apiError) {
        errorWidget.setText("");
        let message = this.getErrorApi(apiError);
        errorWidget.setText(message);
    },

};
