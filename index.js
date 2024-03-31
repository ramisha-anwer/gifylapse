// import modules ==============================================================================================
var express = require('express');
var path = require('path');

// variables ==============================================================================================
var app = express();
var port = process.env.PORT || 3000;

// config ==============================================================================================
// allow cors (not production settings)
app.all('/', function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// static assets
app.use('/static', express.static(path.join(__dirname, 'public/')));

// routes ==============================================================================================
app.all('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// start server ==============================================================================================
app.listen(port, () => console.log('Server live ', port));