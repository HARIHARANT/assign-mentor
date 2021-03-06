const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./shared");
const studentRouter = require("./router/student");
const mentorRouter = require("./router/mentor");
var cors = require('cors')
dotenv.config();
const app = express();
app.use(express.json());
mongo.connect();
app.use(cors());
app.use("/",(req,res,next)=>{    
    next();
   //res.send("Welcome to hallss");
});

app.use("/mentor",mentorRouter);
app.use("/student",studentRouter);

app.listen(process.env.PORT || 5000);