const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connection to MongoDB is success');
    })
    .catch((e) => {
        console.log('Connection to MongoDB on error');
        console.error(e)
    });

const db = mongoose.connection;
module.exports = db;