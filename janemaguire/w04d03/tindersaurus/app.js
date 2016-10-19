const express = require('express');
const morgan  = require('morgan');
const bodyParser     = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose       = require('mongoose');
const app     = express();
const port    = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

mongoose.connect("mongodb://localhost/quotes-app");

app.get('/', (req, res)=>(res.render('index')));

app.listen(port, () => console.log(`Listening on port: ${port}`));
