let quotes = require("../data/quotes");

// INDEX
const quotesIndex = (req, res) => {
  res.render('quotes/index', { quotes });
};

// NEW
const quotesNew = (req, res) => {
  res.render('quotes/new');
};

// SHOW
const quotesShow = (req, res) => {

  let quote = quotes.filter((quote) => {
    return quote.id == req.params.id;
  })[0];

  res.render('quotes/show', { quote });
};

// CREATE

const quotesCreate = (req, res) => {
  let quote = req.body.quote;
  quote.id = quotes.length;
  quotes.push(quote);
  res.redirect(302, "/quotes");
};

// EDIT

const quotesEdit = (req, res) => {
  let quote = quotes.filter((quote) => {
    return quote.id == req.params.id;
  })[0];

  res.render('quotes/edit', { quote });
};

// UPDATE

const quotesUpdate = (req, res) => {
  let index = quotes.findIndex((quote) => {
    return quote.id == req.params.id;
  });
  let quote = req.body.quote;
  quote.id = parseInt(req.params.id);
  quotes[index] = quote;

  res.redirect(301, `/quotes/${quote.id}`);
};

// DELETE

const quotesDelete = (req, res) => {
  let index = quotes.findIndex((quote) => {
    return quote.id == req.params.id;
  });
  quotes.splice(index, 1);
  res.redirect(301, '/quotes');
};

module.exports = {
  index: quotesIndex,
  new: quotesNew,
  show: quotesShow,
  create: quotesCreate,
  edit: quotesEdit,
  update: quotesUpdate,
  delete: quotesDelete
};
