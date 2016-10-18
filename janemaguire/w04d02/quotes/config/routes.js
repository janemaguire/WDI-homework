const express = require("express");
const router = require('express').Router();
const quotesController = require("../controllers/quotesController");

// root path
router.get("/", (req, res) => {
  res.redirect(302, "/quotes");
});

// Restful routes

// INDEX, CREATE
router.route("/quotes")
  .get(quotesController.index)
  .post(quotesController.create);

// NEW
router.route("/quotes/new")
  .get(quotesController.new);

// SHOW, UPDATE, DELETE
router.route("/quotes/:id")
  .get(quotesController.show)
  .put(quotesController.update)
  .delete(quotesController.delete);

// EDIT
router.route("/quotes/:id/edit")
  .get(quotesController.edit);

module.exports = router;
