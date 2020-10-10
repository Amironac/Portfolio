const express = require("express");
const router = express.Router();


router.get("/", (req,res) => res.render("pocetna"))
router.get("/omeni", (req,res) => res.render("omeni"))
router.get("/kontakt", (req,res) => res.render("kontakt"))



module.exports = router;