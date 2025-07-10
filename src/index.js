import "dotenv/config";
import app from "./app.js";
import connectdb from "./db/index.js";
const port = process.env.PORT || 8000;
connectdb() //it returns a promise hence then catch we are using
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on port:", port);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connection failed", error);
  });

/*function connectdb(){

}
connectdb();*/

/*    first approach,good approach easy approach clean approach
import express from "express"
const app=express();
(async ()=>{       iffy function
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on("error",(error)=>{
           console.log("Errr",error)
           throw error
      })
    }
    catch(error){
        console.log("ERROR",error)
        throw error
    }
})()*/
