const express = require('express');
const blogRouter = new express.Router();

blogRouter.get('/', (req, res) => {
     const name = 'guigz';
     res.render('index.pug', {name})
});

blogRouter.get('/admin', (req, res) => {
     res.send('Admin');
});

module.exports = blogRouter;