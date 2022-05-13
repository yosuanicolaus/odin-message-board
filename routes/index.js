var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world :D",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Odin Messages Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message Form" });
});

router.post("/new", function (req, res, next) {
  const data = req.body;
  messages.push({
    text: data.text,
    user: data.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
