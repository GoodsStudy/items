const MongoClient = require('mongodb');
const assert = require('assert');




//链接的网址
const url = 'mongodb://localhost:27017';
//数据库名
const dbName = 'jumei';

const connect = () => {
    return new Promise((resovle, reject) => {
        //使用connect方法连接到服务器
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function(err, client) {
            //是否链接成功，否返回原因
            err ? reject(err) : resovle(client)
            console.log('链接成功!');
        })
    })

}

//插入数据,插入格式[{},{}]
const insert = (col, query) => {
    return new Promise(async(resovle, reject) => {
        let client = await connect();
        const db = client.db(dbName); //选中库操作
        const collection = db.collection(col); //选中表
        //对表进行的操作
        collection.insertMany(query ? query : [], function(err, docs) {
            err ? reject(err) : resovle(docs)
        })
        client.close();
    })
}

//查询数据,查询格式{}
const select = (col, query) => {
    return new Promise(async(resovle, reject) => {
        let client = await connect();
        const db = client.db(dbName); //选中数据库
        const collection = db.collection(col); //选中表
        collection.find(query ? query : {}).toArray(function(err, docs) {
            err ? reject(err) : resovle(docs)
        });
        client.close();
    })
}

//修改数据  query格式为:{a: 2}, {$set: {b: 1}}
const update = (col, query, query2) => {
    return new Promise(async(resovle, reject) => {
        let client = await connect();
        let db = client.db(dbName); //选中数据库
        const collection = db.collection(col); //选中表
        collection.updateOne(query, {
                $set: query2
            },
            function(err, docs) {
                err ? reject(err) : resovle(docs)
            });
        client.close();
    })
}

//删除数据,query类型:{}
const dele = (col, query) => {
    return new Promise(async(resovle, reject) => {
        let client = await connect();
        let db = client.db(dbName); //选中数据库
        const collection = db.collection(col); //选中表
        collection.deleteOne(query ? query : {}, function(err, docs) {
            err ? reject(err) : resovle(docs)
        });
        client.close();
    })
}

//删除多个数据,query类型:{}
const deles = (col, query) => {
    return new Promise(async(resovle, reject) => {
        let client = await connect();
        let db = client.db(dbName); //选中数据库
        const collection = db.collection(col); //选中表
        collection.deleteMany(query ? query : {}, function(err, docs) {
            err ? reject(err) : resovle(docs)
        });
        client.close();
    })
}

module.exports = {
    insert,
    select,
    update,
    dele,
    deles
}