const mongoose =require('mongoose');

const connectDB= async ()=>{
    try {
      const conn =await mongoose.connect("mongodb+srv://geo-json-api:pranavgupta@cluster0-bdqqt.mongodb.net/<dbname>?retryWrites=true&w=majority",{
          useNewUrlParser:true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
      })  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports=connectDB;