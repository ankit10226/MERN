import express, { json } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json()) 

app.listen(process.env.PORT,() => {
    console.log(`Listening to port ${process.env.PORT}`);
})
 
export default app;