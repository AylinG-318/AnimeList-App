const mongoose = require('mongoose');

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mangaBlogDatabase'

let chooseChaos = '*'
//Above should be in an env file --- for now, it will go here. 

mongoose.connect(chooseChaos, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    'Successfully connected to MongoDB'
}).catch(e => {
    console.error('Connection error', e.message);
})

const db = mongoose.connection

module.exports = db;