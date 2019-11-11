var express = require('express');
var router = express.Router();
const {
    select
} = require('../http/mongodb')


/* GET home page. */
router.get('/', async function(req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let data = await select('clothes')
    res.json(data)
});

module.exports = router;