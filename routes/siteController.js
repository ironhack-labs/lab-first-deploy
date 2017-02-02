const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyCTxsFM2Bbm4KEtuFAmdu11WF3s3zUliwU" });
});

module.exports = siteController;
