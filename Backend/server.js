require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({mssg:"Welcome!"})
})

app.listen(process.env.PORT,() => {
    console.log(`Listening to port ${process.env.PORT}`);
})