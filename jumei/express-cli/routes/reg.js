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
    let str = req.body

    let data = await select('user', {
        'name': str.name,
    })

    if (data.length) {
        res.json(false);
    } else {
        insert('user', [{
            'name': str.name,
            'pass': str.pass
        }])
        res.json(true)
    }



    // if (data.length) {
    //     res.json(true)
    // } else {
    //     res.json(false)
    // }




});

module.exports = router;