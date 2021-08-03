const express = require('express');
const { render } = require('pug');
// const { render } = require('pug');
const { projects } = require('./data/data.json');


const app = express();

/* ****************
*  ** Middleware **
*  ****************/ 
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/* ************
*  ** Routes **
*  ********* */
//Index
app.get('/', (req, res) => {
    res.render('index', { projects });
});

//About page
app.get('/about', (req,res)=> {
    res.render('about')
});

//Dynamic project routes
app.get('/projects/:id', (req, res, next) => {
    const id_project = req.params.id;
    const project = projects.find(({ id }) => id === +id_project );

  
       if(project){
           res.render('project', { project} );
       } else {
           res.sendStatus(404)
       }
    
});


/* ******** **
* ** Server **
* ********* **/
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});