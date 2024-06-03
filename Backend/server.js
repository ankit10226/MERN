require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
    "mongodb+srv://rompiekiller:SQWvOHKJBbnIDdL7@cluster0.rgwx4qk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(
    ()=>{
        console.log('Connected');
    }
).catch(
    ()=>{
        console.log('Failed');
    }
)

app.get('/',(req,res)=>{
    res.json({mssg:"Welcome!"})
})

app.listen(process.env.PORT,() => {
    console.log(`Listening to port ${process.env.PORT}`);
})