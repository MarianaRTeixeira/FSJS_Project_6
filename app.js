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

/* ************* *
* ERROR HANDLERS *
**************** */

//404 Error Handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    console.log('Uh-oh...you just hit a 404: not found')
    next(err);
  });
;
//Global Error Handler

  app.use((err, req, res, next) => {
    
    if (err) {
      console.log('Global error handler called', err);
    }  
   if(err.status === 404){
     res.status(404).render('page-not-found', { err })
     } else {
      err.message = err.message || `Ops something wrong with the server`;
      res.status(err.status || 500).render('error', { err });
     }
  });
  

 
 
/* ******** **
* ** Server **
* ********* **/
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

module.exports = app;