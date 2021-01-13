# ClLib

## How to publish

* Add module
* Add export for this module in `projects/cl-lib/src/public-api.ts`
* Update version in `projects/cl-lib/package.json`
* Build library `ng build cl-lib --prod`
* Publish library to npm `cd dist/cl-lib && npm publish`

```
ng build cl-lib --prod
cd dist/cl-lib && npm publish
```

Details: https://angular.io/guide/creating-libraries
