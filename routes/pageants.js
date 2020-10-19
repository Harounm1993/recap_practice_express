const express = require("express");
const router = express.Router();

const { judgePet } = require("../libs/index");

router.post("/", async (req, res) => {
  const { body } = req;
  const judgement = judgePet(body);
  res.json({ payload: judgement });
});

module.exports = router;
