const express = require("express");
const { ensureAuthenticated } = require("../config/auth");
const router = express.Router();

//welcome page
router.get("/", (req, res) => {
  res.render("welcome");
});

//dashboard page
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    name: req.user.name,
  });
});

module.exports = router;
