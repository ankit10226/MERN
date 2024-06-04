
import { connect } from 'mongoose' 
import {} from 'dotenv/config'
import app from './app.js'
import {} from './routes.js'

connect(
    "mongodb+srv://rompiekiller:SQWvOHKJBbnIDdL7@cluster0.rgwx4qk.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0"
).then(
    ()=>{
        console.log('Connected');
    }
).catch(
    (err)=>{
        console.log('Failed ',err);
    }
)


 