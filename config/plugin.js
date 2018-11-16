'use strict';

// had enabled by egg
// exports.static = true;
const nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

const sequelize = {
  enable: true,
  package: 'egg-sequelize'
};

const validate = {
  enable: true,
  package: 'egg-validate',
}

module.exports = { nunjucks, sequelize, validate };
