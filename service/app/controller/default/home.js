'use strict';


const Controller = require('egg').Controller;

class HomeController extends Controller {

    async index() {
        const { ctx } = this;
        ctx.body = 'api 接口';
    }
    async getArticleList() {
        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.interduce as interduce,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
            'article.view_count as view_count ,' +
            '.type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.Id'
        const results = await this.app.mysql.query(sql);
        this.ctx.body = { data: results }
    }

}

module.exports = HomeController;



//Restful
//优点：简单，方便 约束性  GET,PUT,UPDATE,DELETE