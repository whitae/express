/* eslint-disable no-underscore-dangle */
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// 引入外部路由模块
const admin = require('./routers/admin');
const index = require('./routers/index');
const api = require('./routers/api');

const app = express();

// 配置第三方中间件
// 1.设置post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 配置模板引擎
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// 配置静态web目录
app.use('public', express.static('public'));
// 外挂路由
app.use('/admin', admin);
app.use('/index', index);
app.use('/api', api);
// 路由
app.get('/', (req, res) => {
    res.render('index', {
        s: '测试页面',
    });
});
// 监听端口
app.listen(8888);
