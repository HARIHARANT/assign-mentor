const { Timestamp } = require("mongodb");
const mongo = require("../shared");

module.exports.setStudent = async (req,res,next) => {
    try{
        console.log(req.body)
        const timeString = new Date().getTime();
        console.log(timeString);
        req.body.created_at = timeString;
        const data = await mongo.selectedDb.collection("student").insertOne(req.body);
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}


module.exports.getStudent = async (req,res,next) => {
    console.log(mongo)
    try{
        const data = await mongo.selectedDb.collection("student").find().toArray();
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}

module.exports.getStudentWithoutMentor = async (req,res,next) => {
    console.log(mongo)
    try{
        const data = await mongo.selectedDb.collection("student").find({mentor_id: 0}).toArray();
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}


module.exports.putStudent = async (req,res,next) => {   
    try{
        // const dt = {...req.body};
        console.log(req.params.studentID);
        const data = await mongo.selectedDb.collection("student").updateOne(
            { student_id: req.params.studentID},
            {             
              $set:{...req.body}
            }
         );
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}


module.exports.getstudentfilterbymentor = async (req,res,next) => {
    console.log(mongo)
    try{
        console.log(req.params.mentorID);        
        const data = await mongo.selectedDb.collection("student").find({mentor_id: req.params.mentorID}).toArray();
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}