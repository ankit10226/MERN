import express, { json } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())

app.get('/',(req,res)=>{
    res.json({mssg:"Welcome!"})
})

app.listen(process.env.PORT,() => {
    console.log(`Listening to port ${process.env.PORT}`);
})
 
export default app;