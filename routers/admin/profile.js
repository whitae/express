const express = require('express');
const multer = require('multer');
const path = require('path');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');

const router = express.Router();
let storage = multer.diskStorage({
    // TODO上传路径
    destination: async (req, file, cb) => {
        // TODO获取当前日期
        let day = sd.format(new Date(), 'YYYYMMDD');
        let dir = path.join('public/uploads', day);
        // TODO异步方法 使用await变为同步操作
        // await mkdirp(dir);
        // TODO直接调用同步方法
        mkdirp.sync(dir);
        cb(null, dir);
    },
    // TODO上传文件名
    filename(req, file, cb) {
        // TODO获取文件类型
        let type = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + '.' + type);
    },
});
let upload = multer({ storage });
// TODO在需要的post路由里接收使用中间件
router.post('/', upload.fields([
    { name: 'file1', maxCount: 1 },
    { name: 'file2', maxCount: 1 },
]), (req, res) => {
    console.log('submit');
    res.send({
        // TODO查看接收的键值对
        body: req.body,
        // TODO查看接收的文件信息
        file: req.file,
    });
});
module.exports = router;
