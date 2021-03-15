const express = require('express');

// 引入模块
const users = require('./admin/users');

let router = express.Router();

router.get('/', (req, res) => {
    res.send('后台管理');
});
router.use('/users', users);
module.exports = router;
