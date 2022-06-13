const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const app = express();

app.use(express.json());                       // For Post request
dotenv.config({ path: "./config/config.env" });
connectDB()


const router = require("./routes/news.route");
app.use("/", router);


const PORT = process.env.PORT || 8080;

const server = app.listen(8080, () => {
    console.log(`Server started at port: ${PORT}`);
})

process.on("unhandledRejection", (error, promise) => {
    console.log(`Error : ${error.message}`.red); 
    server.close(() => process.exit(1));
  });

  
  