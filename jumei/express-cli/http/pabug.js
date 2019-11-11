const https = require('http');
var express = require('express');
const {
    insert
} = require('./mongodb')
const {
    JSDOM
} = require('jsdom');
const jQuery = require('jquery');
const request = require('request');
const fs = require('fs');

const mock = (html) => {
    const {
        window
    } = new JSDOM(html);
    let $ = jQuery(window);
    return $;
}


//首页数据接口  http://h5.jumei.com/activity/ajaxPageList?id=6509829&page=1&started=1&show_combination=1&size=86&special_start=1572919200&show_comment=0&q_fr_source=activity&show_stock=0&show_hiden_deals=1&locateDM=0&is_filter_coutuan=0
//拼团数据接口  http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20

https.get('http://h5.jumei.com/activity/ajaxPageList?id=6478685&page=1&started=1&show_combination=1&size=74&special_start=1573214400&show_comment=0&q_fr_source=activity&show_stock=0&show_hiden_deals=1&locateDM=0&is_filter_coutuan=0', (res) => {

    res.setEncoding('utf8')
    let str = '';
    res.on('data', (chunk) => {
        str += chunk;
    })
    res.on('end', () => {

        // let $ = mock(str)
        console.log(JSON.parse(str).item_list);

        JSON.parse(str).item_list.map(item => {
            insert('booking', [{
                item_id: item.item_id,
                title: item.name,
                medium_name: item.medium_name,
                img: item.image,
                pl: item.buyer_numer,
                prices: item.original_price,
                price: item.discounted_price,
                type: item.type
            }])
        })
    });

    // $('.logo-main_21aInWJ_0').each((index, item) => {
    //     console.log($(item));
    // })

    // $('img').each((index, item) => {
    //     console.log($(item).attr('src'));

    //     imgs(index, $(item).attr('src'));
    // })
    //})
})

const imgs = (index, item) => {
    request({
        url: item,
        headers: {
            // 请求体，必须在域名为i1.zhiaigou.com发送请求
            'Host': 'i1.zhiaigou.com'
        }
    }).pipe(fs.createWriteStream(`./img/doodle${index}.jpg`))
}