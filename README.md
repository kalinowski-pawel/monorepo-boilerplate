# Pro-Monorepo Boilerplate

Pro-Monorepo boilerplate was created to fast and easy start monorepo application.

Project allows creating complex application on frontend and backend, also we can add additional tools.  
For faster developing **Pro-Monorepo boilerplate** contains packages :

* **client** - allows creating frontend app with **react v17** and **Next.js**, **TypeScript**, **Redux**
* **components** - directory for components, integrated with **storybook** and using **materialUI** with **TypeScript**
 
### Tips and possibilities
* using `lerna create` we can easily add package as **server** with e.i. Node.js as directory for backend.
* in the same way we can easily add package for mobile, with **React Native**, than use components in both, client and mobile  
* To improve handling state changes in reducers you can add **[Immer](https://immerjs.github.io/immer/)** 
* To keep clean and structured commits messages I really recommended use **Husky** with **Commitlint** docs [here](https://github.com/conventional-changelog/commitlint)
* Keep ion mind React packages are based on React CRA, so there is no extracted webpack configuration. However, if you want to add  
some specific configuration you can extend/overwrite cra by using for example **[react-app-rewired](https://github.com/timarney/react-app-rewired)** without ejecting original one

# Quick start / Usage
- Install [lerna](https://github.com/lerna/lerna) first: `yarn global add lerna`
- Run `yarn bootstrap` to install all dependencies and setup monorepo symlinks using [lerna](https://github.com/lerna/lerna).
- Run `yarn start` to start development all servers in parallel client and components with all packages included.
- Run `yarn start:client` to start only client server with all.
- Run `yarn start:components` [optional] to start only components app server if it will be needed.
- Run `yarn storybook:components` to start only storybook app from components.
- Run `yarn test` run all tests.

## Tech stack by particular package
### client:
- next.js
  - next router -> routing is handled by next.js, more info here [Next.js routing](https://nextjs.org/docs/routing/introduction)
- react v17 CRA
- typescript
- jest/testing library
- architecture -> redux, redux thunk, modules(actions, selectors, reducers, actionTypes), services, immer / TODO 
- linters -> eslint extend prettier and tslint, config in root extended by each package
- styling -> css modules with SASS

### components:
- react v17 CRA
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
const withTM = require('next-transpile-modules')(['@pro-monorepo-boilerplate/components']);
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
### 4. Styling 
All presented frontend packages are using React CRA, which means there are CSS modules available out of the box.  
For components package there is also added `styled-components` library, and it is used in example components [Button component](packages/components/src/components/Button/Button.tsx)   
Feel free to use preferred approach for styling, those two are just examples what could be chosen just like that when you're starting with `Pro-monorepo-boilerplate` 



## Tips and more
- to get more info and tools for monorepo check this out [https://monorepo.tools/](https://monorepo.tools/)
