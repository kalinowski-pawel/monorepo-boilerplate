# Pro-Monorepo Boilerplate

Pro-Monorepo boilerplate was created to fast and easy start monorepo application.

Project allows creating complex application on frontend and backend, also we can add additional tools.  
For faster developing **Pro-Monorepo boilerplate** contains packages :

* **client** - allows creating frontend app with **react v17** and **Next.js** 
* **shared** - directory for shared components, integrated with **storybook** and using **materialUI**
* **server** - TODO directory for backend, goLang/node/different  

# Quick start / Usage
- Install [lerna](https://github.com/lerna/lerna) first: `yarn global add lerna`
- Run `yarn bootstrap` to install all dependencies and setup monorepo symlinks using [lerna](https://github.com/lerna/lerna).
- Run `yarn start` to start development both servers  client and shared with all packages included.
- Run `yarn start:client` to start only client server with all.
- Run `yarn start:shared` [optional] to start only shared app server if it will be needed.
- Run `yarn storybook:shared` to start only storybook app from shared.
- Run `yarn test` TODO run all tests.

##Tech stack by particular package

### client:
- next.js
  - next router
- react v17
- typescript
- jest/testing library
- architecture -> redux, redux thunk, modules(actions, selectors, reducers, actionTypes), services, immer / TODO 
- linters -> eslint extend prettier and tslint, config in root extended by each package
- styling -> css modules with SASS

### shared:
- react v17
- typescript
- storybook
- materialUI
- jest/testing library
- styling -> css modules & styled components with SASS
- linter -> eslint extend prettier and tslint, config in root extended by each package


## Technical documentation
### 1. Install dependencies
* To install dependency globally (for all packages), just run  
```lerna add npm-lib-name```  
* To install dependencies as dev, we have to add prefix  `--dev` 
for example   
`lerna add --dev npm-lib-name`
* Installing dependency for particular package require to run command   
```yarn workspace @pro-monorepo-boilerplate/package-name add npm-package-name```  
```example: yarn workspace @pro-monorepo-boilerplate/client add jest```
### 2. Additional package dependencies for CLIENT
* To use additional (e.i. new created packages) in client package, please remember to update `next.config.js` 
Next.js has to know what modules are required.
```
const withTM = require('next-transpile-modules')(['@pro-monorepo-boilerplate/shared']);
```
### 3. Testing
Pro-Monorepo is configured to use libraries like Jest and React Testing library. To run tests just use `yarn test` from
root directory.  
There is in root directory configuration with `babel.config.js` and `jest.config.ts`. If you want to run tests  
directly from packages, those configurations should be extended or overwritten in particular package.  
More details here [babel monorepo](https://babeljs.io/docs/en/config-files#monorepos)
To handling styles in react components by Jest, there is dependency installed `identity-obj-proxy`.  
It allows running tests without problems.

To test components with redux, you have to use provider and pass the store:  
Like in [Example test](packages/client/src/views/GitHubExample/index.test.tsx)
```
<Provider store={store}>
  <GitHubExample />
</Provider>);
```

