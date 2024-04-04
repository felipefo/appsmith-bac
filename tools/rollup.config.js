import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import path from 'path';
import fs from 'fs';

// Adjust the base directory to the project root
const baseDir = path.resolve(__dirname, '..');

// Dynamically generate the Rollup configuration for each library
const libraryFolders = fs.readdirSync(path.join(baseDir, 'libraries')).filter(file => {
  return fs.statSync(path.join(baseDir, 'libraries', file)).isDirectory();
});

function extractFunctions(content) {

    // Remover imports
    let code = content.replace(/export\s+default\s*{/, '');
    code = code.replace(/import\s+.*?;[\r\n]*/g, '');
    // Remover a declaração 'export default {'
    code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');   
    // Remover '};'
    code = code.replace(/};/g, '');; 
    return code;
  }
  
// Leitura dos arquivos na pasta entity e extraição das funções
const entityFiles = fs.readdirSync(path.join(baseDir, 'libraries/service/entity')).map(file => {
  const filePath = path.join(baseDir, 'libraries/service/entity', file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  let code = extractFunctions(fileContent);
  //console.log(code);
  return code;
});


// Conteúdo a ser inserido dentro da tag export modulo {}
const entityContent = entityFiles.join('\n');


var  import_index = "import rest from './util/RestService.js'";


// Arquivo index.js que será atualizado

const indexFile = path.join(baseDir, 'libraries/service/index.js');

// Atualização do conteúdo do arquivo index.js
fs.writeFileSync(indexFile, `export default {\n${entityContent}\n}\n ${import_index} ` );



const outputConfig = libraryFolders.map(folder => {
  return {
    input: path.join(baseDir, `libraries/${folder}/index.js`),
    output: {
      file: path.join(baseDir, `dist/${folder}.umd.js`),
      format: 'umd',
      name: folder.replace(/-\w/g, m => m[1].toUpperCase()), // Convert kebab-case to CamelCase
      globals: {
        // Define globals here if your libraries depend on external modules
      }
    },
    plugins: [
      resolve(),
      terser(),
    ],
    external: [
      // Add external dependencies here if needed
    ]
  };
});

export default outputConfig;
