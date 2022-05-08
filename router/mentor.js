const express = require("express");
const router = express.Router();
const mentorModules = require("../modules/mentor")
router.get("/get",mentorModules.getMentor);
router.post("/set",mentorModules.setMentor);
router.put("/put/:mentorID",mentorModules.putMentor);
module.exports = router;