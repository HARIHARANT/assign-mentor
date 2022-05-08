const {MongoClient} = require("mongodb");

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            console.log("Welcome:: "+process.env.MONGO_DRIVER);
            const client = await MongoClient.connect(process.env.MONGO_DRIVER);
            this.selectedDb = client.db("cloudapp");
            console.log(this.selectedDb);
        }catch(e){
            console.log(e);
        }
    }
}