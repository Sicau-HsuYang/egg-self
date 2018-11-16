'use strict';

const BaseController = require('./base.js');

class HomeController extends BaseController {
  async index() {
    console.log(this.config.environment);
    await this.ctx.render('index.nj', { now: new Date(), environment: this.config.environment });
  }

  async getJson() {
    console.log(this.ctx.request.query);
    this.ctx.entity.User.create({
      name: 'yangxu'+ new Date().getTime(),
      login: 'JohnYang de Macbook pro',
      password: '123456',
      age: 24,
      last_sign_in_at: new Date(),
      create_at: new Date(),
      update_at: new Date()
    });
    this.send({
      name: 'yangxu',
      age: 24
    });
  }

  async post() {
    console.log(ctx.request.body);
    this.ctx.body = {
      name: 'yangxu',
      age: 24
    };
    this.ctx.status = 200;
  }
}

module.exports = HomeController;
