'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/json', controller.home.getJson);
  router.post('/post', controller.home.post);
  router.get('/news', controller.news.list);
};
