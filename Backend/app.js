const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const route = require('./routes')

dotenv.config();

const app = express()
app.use(cors());
app.use(express.json());

app.use('/', route);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Listening to port ${PORT}`);
})
 
module.exports = app;