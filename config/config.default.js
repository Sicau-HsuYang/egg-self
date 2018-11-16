'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542185116112_7434';

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '100mb',
  };

  config.multipart = {
    mode: 'file',
    fileExtensions: [ '.apk' ]
  };

  config.security = {
    xframe: {
      enable: false,
    },
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'student',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    define: {
      freezeTableName: false,
      underscored: true,
    },
    delegate: 'entity', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    baseDir: 'model/entity', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };


  config.middleware = [ 'robot' ];
  // robot's configurations
  config.robot = {
    ua: [ /Baiduspider/i ] };

  return config;
};
