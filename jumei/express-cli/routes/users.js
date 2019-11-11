var express = require('express');
var router = express.Router();
const url = require('url');
const {
    select
} = require('../http/mongodb')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let str = req.body
    let data = await select('booking', {
        item_id: str.id
    })
    if (data.length) {
        res.json(data)
    } else {
        let data = await select('clothes', {
            item_id: str.id
        })
        res.json(data)
    }



});

module.exports = router;