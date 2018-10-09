# pdor-react-component  boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/pdor-react-component.svg)](https://greenkeeper.io/)

Boilerplate for [pdor generator](https://github.com/docomodigital/pdor) to generate a react component

## Features

* **Build**: create production-ready distribution file, also UMD
* **Documentation**: create different documentation for each version
* **Lint**: check the quality of your code
* **Test**: test your code and check the code coverage
* **Example**: try your library with examples
* **Storybook**: try your React component with Storybook
* **Continuous Integration**: set your continuous integration environment with Travis CI

## Usage

```bash
npx @docomodigital/pdor my-app -t react-component
cd my-app
```
Please refer to the [pdor documentation](https://github.com/docomodigital/pdor#README.md) for more info 


### Now you can:

* Edit source code and test of your Component, contained in **src/**
* Check the quality of your code with ```npm run lint```
* Run tests with ```npm run test```
* Check the coverage of your tests with ```npm run test:open```
* Try your Component with examples contained in **examples/**, with ```npm start```
* Try your Component with **storybook**, with stories contained in **stories**, with ```npm storybook```
* Create the documentation and read it with ```npm run doc:open```
* Integrate your Component with Travis CI, using ***.travis.yml***
* Publish your Component on NPM

You can find all commands for develop, maintain and publish your library on **CONTRIBUTING file**.


## Useful links

* [Parcel](https://github.com/parcel-bundler/parcel)
* [React](https://reactjs.org/)
* [JSDoc](https://github.com/jsdoc3/jsdoc)
* [Minami JSDoc Template](https://github.com/Nijikokun/minami)
* [ESLint](https://github.com/eslint/eslint)
* [React Styleguide](https://www.npmjs.com/package/eslint-config-react-app)
* [Jest](https://github.com/facebook/jest)
* [Coveralls](https://github.com/nickmerwin/node-coveralls)
* [Travis CI](https://travis-ci.org/)
* [Storybook](https://storybook.js.org/)

## Next Steps

* Jenkins configuration