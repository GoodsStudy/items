const {
    test
} = require('../http/titlepabug');
var express = require('express');
var router = express.Router();
const url = require('url');
const {
    insert,
    select
} = require('../http/mongodb')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let body = req.body

    let url = `http://h5.jumei.com/product/ajaxDynamicDetail?item_id=${body.id}&type=${body.type}`
    await test(url, res)



    // res.json(str)


});

module.exports = router;