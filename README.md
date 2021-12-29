# monorepo-boilerplate

This boilerplate was created to quick start monorepo application.

Project allows creating complex application on frontend and backend, also we can add additional tools.
Monorepo is split into packages:

** client - allows creating frontend app with react v17
** server - TODO directory for backend, goLang/node/different
\*\* shared - directory for additional tools, for example storybook, materialUI

##Tech stack

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
- css modules
- eslint
- prettier
- sass


TODO

- jest/testing library
- docker?
- cypress
- storybook
- materialUI

## Technical documentation
### 1. Install dependencies
* To install dependency globally (for all packages), just run  
```lerna add dependency-lib-name```.  
* Installing dependency for particular package require to run command   
```lerna add dependency-lib-name --scope=package-name```.  
* To install dependencies as dev, we have to add prefix `--dev` 
for example `lerna add --dev dependency-lib-name`