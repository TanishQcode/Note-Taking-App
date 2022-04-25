const mongoose = require('mongoose')



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "MONGO_URI",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    
    console.error("db error",error);

    process.exit();
  }
};


module.exports = connectDB;
