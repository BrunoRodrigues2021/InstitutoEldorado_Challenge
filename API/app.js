const express = require('express');
const app = express();
const morgan = require('morgan');

const routeProducts = require('./routes/categories');
const routeRequests = require('./routes/devices');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).send({ message: 'ok' });
    }
    next();
});

app.use('/categories', routeProducts);
app.use('/devices', routeRequests);

app.use((req, res, next) => {
    const error = new Error('route not find');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    });
});

module.exports = app;