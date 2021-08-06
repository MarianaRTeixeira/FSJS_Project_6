const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

/* ********** *
* INDEX ROUTE *
************* */

 //Index
router.get('/', (req, res, next) => {
    res.render('index', { projects });
});

//About page
router.get('/about', (req,res, next)=> {
    res.render('about')
});

//Dynamic project routes
router.get('/projects/:id', (req, res, next) => {
    const id_project = req.params.id;
    const project = projects.find(({ id }) => id === +id_project );
    
    if(project){
         res.render('project', { project } );
    } else {
        const err = new Error();
            err.status = 404;
            err.message = `You hit a 404 ...`;
            console.log('404 error appear')
            next(err)
    }
    res.render('project', { project } );
});

router.get('/error', (req, res, next) => {
    console.log('Error was called');
    const err = new Error();
    err.message = `500 error`;
    err.status = 500;
    throw err;
  });

module.exports = router;