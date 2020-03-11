const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.set('views', './views');

const blogRouter = require('./blog-router');

const PORT = 3000;
const HOST = 'localhost';

app.use('/', blogRouter);

app.listen(PORT, HOST, () => {
     console.log(`Listening on http://${HOST}:${PORT}`);
});