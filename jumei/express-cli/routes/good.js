var express = require('express');
var router = express.Router();
const url = require('url');
const {
    select,
    deles
} = require('../http/mongodb')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let str = req.body

    //查询用户购物车
    let data = await select('shop', {
        item_id: str.name
    })

    //删除数据库中的数据

    await deles('shop', {
        item_id: str.name
    })


    res.json(data)

});

module.exports = router;