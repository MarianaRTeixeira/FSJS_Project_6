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
        res.sendStatus(404);
    }
});



module.exports = router;