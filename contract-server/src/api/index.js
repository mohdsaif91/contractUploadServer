const express = require("express");

const emojis = require("./emojis");
const contract = require("./contract");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/contract", contract);

module.exports = router;
