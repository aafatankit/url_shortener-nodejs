// const express = require('express');
// const fs = require('fs');
// const db = require('./../util/connect.js');

// const router = express.Router();

// router.post('/original', (req, res, next) => {
//     const links = req.body.link;
//     let count = 0;
//     if(Array.isArray(links)){
//         let n = links.length;
//         for(let i = 0; i < n; i++){
//             let size = links[i].length;
//             let index = size - 8;
//             const temp = links[i].substr(index,size);
//             db.execute('select * from links where short = ?', [temp])
//                 .then(([rows, datafields]) => {
//                     if(rows.length == 1){
//                         input1 = links[i];
//                         input2 = rows[0].original;
//                         if(count == 0){
//                             fs.writeFile('addition.ejs', '<div class="container"><h4>URL: <i class="text-success">'+ input1 +'</i></h4><br><h4>Original Url: </h4><p><i class="text-primary">'+ input2 +'</i></p><hr></div>', function (err) {
//                                 if (err) throw err;
//                             });
//                             count++;
//                         }
//                         else{
//                             fs.appendFile('addition.ejs', '<div class="container"><h4>URL: <i class="text-success">'+ input1 +'</i></h4><br><h4>Original Url: </h4><p><i class="text-primary">'+ input2 +'</i></p><hr></div>', function (err) {
//                                 if (err) throw err;
//                             });
//                         }
//                     }
//                     else{
//                         input1 = links[i];
//                         if(count == 0){
//                             fs.writeFile('addition.ejs', '<div class="container"><h4>URL: <i class="text-success">'+ input1 +'</i></h4><br><h4>Original Url: <i class="text-danger">Invalid/Not Found/Expired</i></h4><hr></div>', function (err) {
//                                 if (err) throw err;
//                             });
//                             count++;
//                         }
//                         else{
//                             fs.appendFile('addition.ejs', '<div class="container"><h4>URL: <i class="text-success">'+ input1 +'</i></h4><br><h4>Original Url: <i class="text-danger">Invalid/Not Found/Expired</i></h4><hr></div>', function (err) {
//                                 if (err) throw err;
//                             });
//                         }
//                     }
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         }
//     }
//     else{
//         let n = links.length;
//         console.log(n);
//         let i = n - 8;
//         const temp = links.substr(i,n);
//         db.execute('select * from links where short = ?', [temp])
//             .then(([rows, datafields]) => {
//                 if(rows.length == 1){
//                     input1 = links;
//                     input2 = rows[0].original;
//                     fs.writeFile('addition.ejs', '<div class="container"><h4>URL: <i class="text-success">'+ input1 +'</i></h4><br><h4>Original Url: </h4><p><i class="text-primary">'+ input2 +'</i></p><hr></div>', function (err) {
//                         if (err) throw err;
//                     });
//                 }
//                 else{
//                     input1 = links;
//                     fs.writeFile('addition.ejs', '<div class="container"><h4>URL: <i class="text-success">'+ input1 +'</i></h4><br><h4>Original Url: <i class="text-danger">Invalid/Not Found/Expired</i></h4><hr></div>', function (err) {
//                         if (err) throw err;
//                     });
//                 }
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }   
//     res.render('original',{avail: 1});
// });


// router.use('/original', (req, res, next) => {
//     res.render('original',{avail: 0});
// });

// module.exports = router;