const express = require('express');
const router = express.Router();
const User = require('../models/registerUser.js');
const passport = require('passport');
const cors = require('cors');

router.post('/', passport.authenticate('local',{
  successRedirect: "/auth/local/signin",
  failureRedirect: "/auth/local/error",
}));
router.use("/signin", function(req, res){
  res.send("Clear!");
  console.log("Clear");
});
router.use("/error", function(req, res){
  res.send("error");
  console.log("error");
});

module.exports = router;
