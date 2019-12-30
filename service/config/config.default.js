/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1571037921187_9533';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.mysql = {
        // database configuration
        client: {
            // host
            host: 'localhost',
            // port
            port: '3306',
            // username
            user: 'root',
            // password
            password: '12345678',
            // database
            database: 'test',
        }
    };
    config.security = {
        csrf: { enable: false },
        domainWhiteList: ['*']
    };
    config.cors = {
        origin: 'http://localhost:3000',
        credentials:true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    return {
        ...config,
        ...userConfig,
    };
};