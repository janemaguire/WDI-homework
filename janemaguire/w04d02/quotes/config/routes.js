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
router.route("/quotes/new")
  .get(quotesController.new);

// SHOW
router.route("/quotes/:id")
  .get(quotesController.show);

module.exports = router;
