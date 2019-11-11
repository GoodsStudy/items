const http = require('http');
var express = require('express');
const request = require('request');
const test = (url, ter) => {
    http.get(url, (res) => {
        res.setEncoding('utf8')
        let str = '';
        res.on('data', (chunk) => {
            str += chunk;
        })
        res.on('end', () => {
            console.log(JSON.parse(str))
            ter.json(JSON.parse(str))
            return JSON.parse(str)
        });

    })
}

module.exports = {
    test
}