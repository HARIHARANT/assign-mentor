const express = require("express");
const router = express.Router();
const studentModule = require("../modules/student")
router.get("/get",studentModule.getStudent);
router.post("/set",studentModule.setStudent);
router.get("/getStudentWithoutMentor",studentModule.getStudentWithoutMentor);
router.put("/put/:studentID",studentModule.putStudent);
router.get("/getstudentfilterbymentor/:mentorID",studentModule.getstudentfilterbymentor);

module.exports = router;