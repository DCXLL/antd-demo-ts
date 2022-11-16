const CracoAntDesignPlugin = require('craco-antd');
const CracoAlias = require('craco-alias');
const WebpackBar = require('webpackbar');
const CracoLessPlugin = require('craco-less');
const CracoCSSModules = require('craco-css-modules');
const path = require('path');
module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#1DA57A',
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'options',
                baseUrl: './',
                aliases: {
                    '@umi/styled-engine':
                        './node_modules/@mui/styled-enginw-sc',
                },
            },
        },
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
    webpack: {
        alias: {
            '@': path.resolve('src'),
        },
        plugins: [new WebpackBar()],
    },
};
