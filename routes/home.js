const path = require('path');
const express = require('express');
const db = require('./../util/connect.js');

const router = express.Router();




router.use('/home', (req, res, next) => {
    db.execute('select * from links order by id desc')
        .then(([rows, datafield]) => {
            res.render('home', { url: rows, notification: 0});
        })
        .catch(err => {
            console.log(err);
        });
    
});

module.exports = router;