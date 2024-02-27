require('dotenv').config();
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');

const app = express();
const { NODE_ENV, PORT, SECRET_SESSION} = process.env;
const homeRouter = require('./routes/home.route.js');

app.set('views', './views');
app.set('view engine', "ejs");

app.use(express.urlencoded({ extended: true}));
app.use(express.static('/public'));

app.use(session({
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: true
}));


app.use(homeRouter);

app.use(morgan('tiny'));

// Database Instance
require('./models');

app.listen(PORT, () => {
    console.log(`Server launched on ${PORT} ${NODE_ENV}`);
});