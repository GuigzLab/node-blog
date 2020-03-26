require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'pug');

app.set('views', './views');

const blogRouter = require('./blog-router');

const PORT = 3000;
const HOST = 'localhost';

app.use('/', blogRouter);
app.use(express.static('./public'));

const uri = `mongodb+srv://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('[MongoDB] Connected'))
     .then( () => {
          app.listen(PORT, HOST, () => {
               console.log(`[Express] Listening on http://${HOST}:${PORT}`);
          });
     })
     .catch(err => console.error(err))