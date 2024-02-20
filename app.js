require('dotenv').config();
const express = require('express');

const app = express();
const { NODE_ENV, PORT} = process.env;
const homeRouter = require('./routes/home.route.js');

app.set('views', './views');
app.set('view engine', "ejs");

app.use(express.urlencoded({ extended: true}));
app.use(express.static('/public'));

app.use(homeRouter);

app.listen(PORT, () => {
    console.log(`Server launched on ${PORT} ${NODE_ENV}`);
});