const express = require('express');
const blogRouter = new express.Router();

blogRouter.get('/', (req, res) => {
     const name = 'guigz';
     res.render('index.pug', { name })
});

blogRouter.get('/article/:id', (req, res) => {
     res.render('article.pug')
});

blogRouter.get('/admin', (req, res) => {
     res.render('admin/admin.pug')
});

blogRouter.get('/admin/write', (req, res) => {
     res.render('admin/write.pug')
});

blogRouter.get('/admin/edit/:id', (req, res) => {
     res.render('admin/edit.pug')
});

module.exports = blogRouter;