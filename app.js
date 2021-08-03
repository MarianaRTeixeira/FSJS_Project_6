const express = require('express');
const { render } = require('pug');
const { projects } = require('./data/data.json');
const app = express();

const i_router = require('./routes/index');
/* ****************
*  ** Middleware **
*  ****************/ 
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/* ************
*  ** Routes **
*  ********* */

app.use('/', i_router)

/* ******** **
* ** Server **
* ********* **/
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

module.exports = app;