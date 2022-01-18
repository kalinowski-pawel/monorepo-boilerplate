# Monorepo Boilerplate

This boilerplate was created to fast and easy start monorepo application.

Project allows creating complex application on frontend and backend, also we can add additional tools.  
For faster developing **Monorepo boilerplate** contains packages :

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
  - css modules
  - next router
- react v17
- redux
- redux thunk
- typescript
- eslint
- prettier
- sass

### shared:
- react v17
- typescript
- css modules & styled components
- eslint
- prettier
- sass
- storybook
- materialUI


TODO
- jest/testing library
- docker?
- cypress
- add services for  communication with API

## Technical documentation
### 1. Install dependencies
* To install dependency globally (for all packages), just run  
```lerna add npm-lib-name```  
* To install dependencies as dev, we have to add prefix `--dev` 
for example `lerna add --dev npm-lib-name`
* Installing dependency for particular package require to run command   
```yarn workspace package-name add npm-package-name```
### 2. Additional package dependencies for CLIENT
* To use additional (e.i. new created packages) in client package, please remember to update `next.config.js` 
Next.js has to know what modules are required.
```
const withTM = require('next-transpile-modules')(['@monorepo-boilerplate/shared']);
```
