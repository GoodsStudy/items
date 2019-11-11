var express = require('express');
var router = express.Router();
const url = require('url');
const {
    insert,
    select,
} = require('../http/mongodb')
const qs = require('qs')

/* GET users listing. */
router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let str = qs.parse(req.body)
    str.img.map((item, index) => {
        insert('shop', [{
            item_id: str.uid,
            img: str.img[index],
            name: str.name[index],
            price: str.price[index],
            id: str.id[index],
            model: str.model[index],
            type: str.type[index],
            num: str.num[index],
            kc: str.kc[index]
        }])
    })
    let data = true
    res.json(data)

});

module.exports = router;