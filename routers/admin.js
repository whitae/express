const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    res.send('后台管理');
});
module.exports = router;
