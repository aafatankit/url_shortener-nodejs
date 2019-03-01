const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const urlExists = require('url-exists');

const check = require('./../test.js');
const db = require('./../util/connect.js');

const getRandomInt = () => {
    min = Math.ceil(0);
    max = Math.floor(61);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

shortGenerator = () => {
    const str = 'abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0';
    let short = '';
    for(let i = 0; i < 8; i++)
        short = short.concat(str.charAt(getRandomInt()));
    return short;
}

class shortURL {
    constructor(short, original){
        this.short = short;
        this.original = original;
    }

    save(){
        db.execute('insert into links(short, original) values(?,?)', [this.short, this.original]);
    }
}

function checkurl(url){
    urlExists(url, function(err, exists) {
        return exists; // true 
    });
}

const output = [];

router.use('/generatelink', (req, res, next) => {
    const links = req.body.link;
    if(Array.isArray(links)){
        let n = links.length;
        for(let i = 0; i < n; i++){
            let originalLink = links[i];
            let shortLink = shortGenerator();
            urlExists(originalLink, function(err, exists) {
                if(exists){
                    output.push(shortLink);
                    const url = new shortURL(shortLink, originalLink);
                    url.save();
                }
                else{
                    output.push('null');
                }
            });
        }
        res.redirect('/');
    }
    else{
        let originalLink = links;
        let shortLink = shortGenerator();
        urlExists(originalLink, function(err, exists) {
            if(exists){
                output.push(shortLink);
                const url = new shortURL(shortLink, originalLink);
                url.save();
            }
            else{
                output.push('null');
            }
        });
        res.redirect('/');
    }
});


module.exports = router;