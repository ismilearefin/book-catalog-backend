import mongoose from "mongoose";
import app from "./app";
import config from "./config";
// const port = 5000

async function main() {
    try{
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
          })
        console.log('Database connection established')
    }catch(err){
        console.log('Failed to connect to Database', err)
    }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  main();