require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors'); // 외부요청 허용
const passport = require('passport');

//var http = require('http').Server(app); 

const rtsIndex = require('./routes/index.router');
const mongoose = require('mongoose');
const Data = mongoose.model('Data');
var app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize()); // 초기화
app.use('/api', rtsIndex); // 기본 경로 설정


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
