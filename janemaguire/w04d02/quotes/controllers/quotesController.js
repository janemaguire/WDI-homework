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

module.exports = {
  index: quotesIndex,
  new: quotesNew,
  show: quotesShow
};
