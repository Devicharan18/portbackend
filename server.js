const express= require('express')
const cors=require('cors')
const dotenv=require('dotenv');
const contactModel = require('./models/contactModel');
const mongoose=require('mongoose')
// require('./models/database');
mongoose.connect('mongodb+srv://charan:12345@cluster0.wargbf7.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err))
//dotenv configuration
dotenv.config()
//rest object
const app=express()
//midlewares
app.use(cors())
app.use(express.json())
//routes
// app.use('/api/v1/portfolio',require('./routes/portfolioRoute'));
//port
const PORT=process.env.PORT || 8080
app.post("/add", (req, res) => {
    const task = req.body;
    contactModel.create({
      name:task.name,
      email:task.email,
      message:task.message
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  });
//listen
app.listen(PORT,()=>{
    console.log(`Server Running On PORT ${PORT}`);
});

