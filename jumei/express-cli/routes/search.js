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
    let body = req.body.tex
    let str
    let url = `http://mobile.jumei.com/msapi/search/suggestion.json?keyword=${body}&url=http://mobile.jumei.com/msapi/search/suggestion.json`

    str = await test(url, res)



    // res.json(str)


});

module.exports = router;