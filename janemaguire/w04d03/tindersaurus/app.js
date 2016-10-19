const express = require('express');
const morgan  = require('morgan');
const bodyParser     = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose       = require('mongoose');
const app     = express();
const port    = process.env.PORT || 8000;
const router = require('./config/routes');
const methodOverride = require('method-override');

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

app.use(methodOverride((req, res) => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

mongoose.connect("mongodb://localhost/tindersaurus");

app.use('/', router);

app.listen(port, () => console.log(`Listening on port: ${port}`));
