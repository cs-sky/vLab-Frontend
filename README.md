# vLab - IDE Page

> A [Vue.js](https://vuejs.org/index.html) project with [monaco-editor](http://github.com/Microsoft/monaco-editor)

## Dependencies
```javascript
"monaco-editor": "=0.19.3",
"monaco-editor-webpack-plugin": "=1.9.0",
"webpack": "^3.6.0",
"webpack-dev-server": "^2.9.1",
```

## Build & Run Setup
### Install Dependencies (node_modules/)
``` bash
npm install .
```

### Serve Dev Version with Hot Reload at http://localhost:8080 [works well]
``` bash
npm run dev
node index.js
```

### Build for Production with Minification [not tested]
``` bash
npm run build
将.htaccess 放置到dist文件夹下，运行服务器即可正常访问
```
Then set the website root to `vLab-Frontend/dist/` and setup local server with Apache.

## Instructions

Please review our  [welcome.md](https://github.com/BUAASoftwareEngineering/vLab-Frontend/blob/master/Welcome.md)

## Contributing

Please review our [contribution guidelines](https://github.com/BUAASoftwareEngineering/vLab-Frontend/blob/master/contributing.md).