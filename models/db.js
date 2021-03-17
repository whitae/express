// 引入mongo数据库组件
const mongoose = require('mongoose');
// TODO连接数据库
mongoose.connect('mongodb://mymongo:123456@localhost:27017/mymongo', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
