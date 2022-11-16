### https://ant-design.gitee.io/docs/react/use-in-typescript-cn

### 1.根据上述文档创建 react-ts 项目并引入 antd

```javascript
yarn create react-app antd-demo-ts --template typescript
yarn add antd
```

### 2.配置 craco.config.js 配置 less

```javascript
yarn add @craco/craco
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
/* 根目录创建 craco.config.js */
module.exports = {
  // ...
};
```

### 3.配置 webpack 别名@

```javascript
/*craco.config.js配置webpack*/
 webpack: {
        alias: {
            '@': path.resolve('src'),
        },
        plugins: [new WebpackBar()],
    },
/* tsconfig.json */
  "compilerOptions": {
    "paths":{
        "@/*":["./src/*"]
    }
  },
```

### 4.配置 less 模块化

```javascript
/*craco.config.js支持less和css modules完整代码如下*/
const CracoLessPlugin = require('craco-less');
const CracoCSSModules = require('craco-css-modules');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                        module: true,
                    },
                },
            },
        },
        {
            plugin: CracoCSSModules,
        },
    ],
};
```

### 5.配置热更新

### 6.配置 eslint

### 7.配置 prettier

### 8.配置 git preHooks
