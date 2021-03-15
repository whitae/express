const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    res.send('index页面');
});
module.exports = router;
