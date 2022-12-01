# nest-sdk-generator-stripe-problem

## What's changed

### Config

- added `peerDependencies` to specify packages whose type will not get included in SDK
- added `name` for the SDK name for package.json

### SdkContent
- added version which is taken from the source's package.json

### Analysis
- `typesToExtract` that are from package listed in `peerDependencies` are skipped

### Generation
- added generation of `package.json` including `name` and `peerDependencies`


## Test scenario
### 1) Create SDK
```
cd nest-sdk-generator
npm i
npm start -- ../backend/sdk-generator.json
```

### 2) Test
```
cd frontend
npm i
npm run build
npm start
```