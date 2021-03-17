const express = require('express');

let router = express.Router();
router.get('/', (req, res) => {
    res.send('用户管理首页');
});
router.get('/add', (req, res) => {
    res.send('添加用户');
});
router.get('/delete', (req, res) => {
    res.send('删除用户');
});
router.get('/listall', (req, res) => {
});
module.exports = router;
