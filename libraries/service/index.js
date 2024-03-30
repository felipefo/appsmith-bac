// index.js

/**
 * Converte uma string para maiúsculas
 * @param {string} str A string a ser convertida
 * @returns {string} A string convertida para maiúsculas
 */
function toUpperCase(str) {
  return str.toUpperCase();
}

// Exporte a função toUpperCase para ser utilizada em outros arquivos
module.exports = {
  toUpperCase: toUpperCase
};
