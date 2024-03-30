
# Biblioteca para ser utilizada no projeto do BAC


## Installation

git clone git@github.com:felipefo/appsmith-bac.git
```
npm install
```
Alternatively, you can follow the tutorial to set your own foundry up from scratch. (coming soon)

## Usage
1. Crie um subdiretorio para uma nova funcionalidade. O nome da pasta será o nome da biblioteca.
2. Crie um `index.js` dentro do arquivo, e coloque o seu código no index.js. Atualmente, o nome da biblioteca será o nome do JSObject no appsmith.
3. Run `npm build` to generate the UMM file and a helpful README for your library. 
4. Commit and push your changes to a public Github repo.
---------------------------------------------------
1. Importe a biblioteca  no appsmith que é gerado na pasta dist.
2. Rode um servidor local como o nginx para ficar mais fácil o teste dentro do appsmith 
3. Para usar o exemplo dentro do appsmith crie um objeto JSObject 

```
export default {
	async getData () {
		var data;
		try {
			data = serviceb.getAnimais();
			if(data == null){
				showAlert("Error")
			}
		}catch(error){
			showAlert(error);
		}
		return data;
	}
}
```



## Repo management
Each library should be added to its own folder in the `libraries` directory as a single `index.js` file. This is intended to support simple libraries that are contained in a single file with few or no dependencies. The default expectation is that you can directly cut/paste an Appsmith JSObject into your `index.js`.

The repo used `@rollup` to process your code into a UDM file, and expects to use JSDelivr for CDN delivery. 

### Scripts
- **build** - runs both the UMD & the readme file generation commands. In essence, it is the same as running `umd.generate` & `readme.generate`. This is the default command to update your repo when you add or update a library.
```js
npm run build
```
- **readme.generate** - used to generate a readme file for each library. It uses the `jsDocLite` library in this repo to parse the JSDoc comments out of the library `index.js` file. It will iterate over each library and save the README to that directory.
```js
npm run readme.generate
```
- **umd.generate** - used to generate the UMD code versions in the `dist` directory. This will iterate over every folder in the `libraries` directory and use the `index.js` in each one. The name of the folder will be the name of the library.
```js
npm run umd.generate
```

### Teste

npx jest



[MIT](https://choosealicense.com/licenses/mit/)
