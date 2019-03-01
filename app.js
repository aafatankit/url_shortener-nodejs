const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routerHome = require('./routes/home.js');
const routerOriginal = require('./routes/original.js');
const routerGeneratelink = require('./routes/generatelink.js');
const homeController = require('./routes/redirectlink.js');


app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(routerGeneratelink);
app.use(routerOriginal);
app.use(routerHome);
app.use(homeController);

app.listen(3000);