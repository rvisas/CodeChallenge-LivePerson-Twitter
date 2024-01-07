const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./config/db_config')
const Search = require('./model/searchModel');
const Tweets = require('./model/tweetsModel');
const cors = require('cors');
db.authenticate()
    .then(() => {
        console.log('DB connected')
        Search.sync()
        Tweets.sync()
        Search.hasMany(Tweets)
    })
    .catch(err => {
        console.log('Error' + err)
    })

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/api-routes')(app)
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

module.exports = app;
