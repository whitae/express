const mongoose = require('./db');

// TODO定义一个schema
let userSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        default: 18,
    },
});
// TODO定义数据库模型 操作数据库
// 1.第一个参数首字母大写，和实际的mongo中collection名称一致
const User = mongoose.model('Mymongo', userSchema, 'mymongo');
module.exports = User;
