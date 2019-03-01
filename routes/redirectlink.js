const express = require('express');
const db = require('./../util/connect.js');
const router = express.Router();


router.use((req, res, next) => {
    const url = req.originalUrl;
    const size = url.length;
    if(size == 9){
        const short = url.substr(1,8);
        db.execute('select * from links where short = ?', [short])
                .then(([rows, datafield]) => {
                    if(rows.length == 1){
                        db.execute('update links set count = count + 1 where short = ?', [short]);
                        res.redirect(rows[0].original);
                    }
                    else{
                        db.execute('select * from links order by id desc')
                            .then(([rows, datafield]) => {
                                res.render('home', { url: rows, notification: 1});
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
    }
    else{
        if(url === '/'){
            res.redirect('/home');
        }
        else{
            db.execute('select * from links order by id desc')
                .then(([rows, datafield]) => {
                    res.render('home', { url: rows, notification: 1});
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
  });

  module.exports = router;