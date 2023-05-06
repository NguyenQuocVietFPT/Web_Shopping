const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Message: "Successfully loaded",
  });
});

module.exports = router;
