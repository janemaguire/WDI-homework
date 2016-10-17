const express = require('express');
const morgan  = require('morgan');
const expressLayout = require('express-ejs-layouts');
const router = require('./config/routes');
const app     = express();
const port    = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(expressLayout);

app.use('/', router);

app.listen(port, () => console.log(`Listening on port: ${port}`));
