'use strict';
const environment = 'production';
module.exports = appInfo => {
  const config = exports = {};
  config.environment = environment;
  return config;
};
