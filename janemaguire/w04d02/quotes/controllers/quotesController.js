let quotes = require("../data/quotes");

// INDEX
const quotesIndex = (req, res) => {
  res.render('quotes/index', { quotes });
};

// NEW
const quotesNew = (req, res) => {
  res.render('quotes/new');
};

module.exports = {
  index: quotesIndex,
  new: quotesNew
};
