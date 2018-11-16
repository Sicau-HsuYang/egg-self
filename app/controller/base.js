'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    async send(json) {
        this.ctx.contentType = 'application/json';
        this.ctx.body = json || {};
        this.ctx.status = 200;
    }

    async sendString (rawString) {
        this.ctx.contentType = 'text/plain';
        this.ctx.body = rawString || {};
        this.ctx.status = 200;
    }

    async sendHtml (rawHtml) {
        this.ctx.contentType = 'text/html';
        this.ctx.body = rawHtml || {};
        this.ctx.status = 200;
    }
}

module.exports = BaseController;