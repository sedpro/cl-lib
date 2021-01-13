# ClLib

## How to publish

* Add module
* Add export for this module in `projects/cl-lib/src/public-api.ts`
* Update version in `projects/cl-lib/package.json`
* Run `npm run build-lib`

Details: https://angular.io/guide/creating-libraries

## Npm linking:

* Link the library: `cd dist/cl-lib && npm link`
* Go to directory where library is used and link it to those project: ``

https://dev.to/erinbush/npm-linking-and-unlinking-2h1g
