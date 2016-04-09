## netstuff: learning webpack

[Pro React Book Tutorial](http://www.pro-react.com/materials/appendixA/)

##### Simplest possible usage to bundle on demand

```shell
node_modules/.bin/webpack app/main.js public/bundle.js
```

##### webpack-dev-server
Serve bundled and transpiled code, refresh upon change
```shell
npm start
```

##### As an on demand npm task runner
All scripts in [package.json]() already have `node_modules/.bin` in the path

```javascript
 // npm setup in package.json
"scripts": {
  "start" : "webpack"
},
```

```shell
npm start
```
