<p align="center">
<a href="https://www.appsmith.com?utm_source=github&utm_medium=organic&utm_campaign=readme">
  <img src="static/appsmith_logo_white.png" alt="Appsmith Logo" width="350">
</a>
</p>

# Appsmith Foundry Custom Library

This is a collection of utility functions for common tasks in JavaScript. This module includes functions to work with arrays, objects, and generate unique IDs. It's designed to be simple to use and can be easily integrated into your Node.js, browser-based projects or Appsmith apps.

*Note: This method requires a public Github repository.*

## Installation

You can clone this repo using Git to create and modify:

```sh
git clone git@[github.com:felipefo/appsmith-bac.git
```
Once cloned, you will need to install the Node modules to get it ready for usage. This should only be needed the first time (unless you add extra modules).
```sh
npm install
```
Alternatively, you can follow the tutorial to set your own foundry up from scratch. (coming soon)

## Usage
1. Create a new sub-directory in the `libraries` folder. This should be the name of your custom library.
2. Create an `index.js` file in that folder, and copy your code in there. Currently, this is expected to be an Appsmith JSObject.
3. Run `npm build` to generate the UMM file and a helpful README for your library. 
4. Commit and push your changes to a public Github repo.

Your library is ready for usage using JSDelivr. See the generated README for the link.

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

## Libraries availble

Here are the libraries available in this repo and how to use them. All of them are availble using JSDelivr so you can import them into your Appsmith app.


### Dev dependencies
- npm
- You will need the Rollup node modules for doing the UMD generation
- The readme.generate command relies on the jsDocLite library, which is included as a CDN call to JSDelivr.

### Todo
- jsDocLite
  - Allow it to work with multiple comment lines
  - add @todo
- Make readme generator easier to use with a template

## Contributing

Contributions are always welcome! Open an issue or a PR!

## License

[MIT](https://choosealicense.com/licenses/mit/)
