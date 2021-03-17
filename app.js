/* eslint-disable no-underscore-dangle */
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// 引入外部路由模块
const admin = require('./routers/admin');
const index = require('./routers/index');
const api = require('./routers/api');
// const User = require('./models/user');
// // TODO查询数据
// User.find({}, (err, doc) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(doc);
// });
// // TODO存储数据
// // save中可以不监听错误
// new User({ name: 'Kitty', age: 18 }).save((err) => {
//     if (err) { console.log(err); return; }
//     console.log('插入成功');
// });
// // TODO更新数据
// // 第一个是查询条件 第二个是更新的内容
// User.updateOne({ name: 'Kitty' }, { age: 20 }, (err, doc) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(doc);
//     }
// });
// // TODO删除数据
// User.deleteOne({ name: 'Kitty' }, (err, doc) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(doc);
//     }
// });

// Express
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
