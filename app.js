const express = require('express');
const logger = require('morgan');
const { MONGO_URL } = require('./config');
const mongoose = require('mongoose')
const log = require('npmlog');
const healthcheckRouter = require('./routes/healthcheck.routes');
const accountRouter = require('./routes/account.routes');
const registerationRouter = require('./routes/register.routes')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose
    .connect(MONGO_URL ,{
        useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }).then(()=>{
        log.info('FYI','Database Connected with user \'bank-user\'');
    }).catch(err=>{
        log.error('FATAL','Failed to connect to database with error: %j', err);
        process.exit();
    });

app.use('/', healthcheckRouter);
app.use('/', registerationRouter);
app.use('/account', accountRouter);

module.exports = app;
