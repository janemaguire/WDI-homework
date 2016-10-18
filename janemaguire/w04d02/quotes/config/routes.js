const express = require("express");
const router = require('express').Router();
const quotesController = require("../controllers/quotesController");

// root path
router.get("/", (req, res) => {
  res.redirect(302, "/quotes");
});

// Restful routes

// INDEX
router.route("/quotes")
  .get(quotesController.index);

// NEW
router.get('/quotes/new', (req, res) => res.render('quotes/new'));

module.exports = router;
