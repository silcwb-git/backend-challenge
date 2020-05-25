const express = require("express");
const Urls = require("../model/url");
const router = express.Router();
const path = require("path");

router.get("/", async (req, res) => {
  const list = await Urls.find({});
  return res.json(list);
});

router.get("/:short", async (req, res) => {
  let short = req.params.short;

  if (!short) return res.status(403).end({ error: "Id inválido!" });

  try {
    const url = await Urls.find({ short }, "url");

    return res.status(301).redirect(url[0].url);
  } catch (err) {
    return res.status(500).send({ error: "Erro ao buscar o Id" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Urls.findOneAndDelete(id);
  return res.send({ message: "Url Deleted" });
});

module.exports = router;
