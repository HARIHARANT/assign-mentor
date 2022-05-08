const { ObjectId } = require("mongodb");
const mongo = require("../shared");

module.exports.setMentor = async (req,res,next) => {
    try{
        console.log(req.body)
        const timeString = new Date().getTime();
        console.log(timeString);
        req.body.created_at = timeString;
        const data = await mongo.selectedDb.collection("mentor").insertOne(req.body);
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}


module.exports.getMentor = async (req,res,next) => {
    //console.log(mongo)
    try{
        const data = await mongo.selectedDb.collection("mentor").find().toArray();
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}

module.exports.putMentor = async (req,res,next) => {   
    try{
        // const dt = {...req.body};
        console.log(req.params.mentorID);
        const data = await mongo.selectedDb.collection("mentor").updateOne(
            { mentor_id: req.params.mentorID},
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