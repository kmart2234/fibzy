const express       = require('express');
const bodyParser    = require('body-parser');
const logger        = require('morgan');
const routes        = require('./routes');

const port = 8001;

const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/v1', routes);

// Start the server
app.listen(port,() => {
    console.log('Fibzy started and is listening on port ' + port);
});