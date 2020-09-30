const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE, POST, PATCH, OPTIONS");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


require('./config/config');
const studRoutes = require('./routes/index.route'); 
// const moduleRoute = require('./routes/module.route');
//Passport
require('./config/passport');
//Mongo Connect
const connect = require('./dbconnect');

const contactusRoute = require('./routes/contactus.js')


//Body Parser, Cors, Cookie parser
app.use(bodyParser.json());
app.use(cors());

//Passport Middleware
app.use(passport.initialize());

app.use('/api', studRoutes);
app.use('/send',contactusRoute);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


app.listen(process.env.PORT, '0.0.0.0', () => console.log(`Server started at port : ${process.env.PORT}`));
