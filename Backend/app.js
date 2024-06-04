const app = require("./server");


app.get('/',(req,res)=>{
    res.json({mssg:"Welcome!"})
})

app.listen(process.env.PORT,() => {
    console.log(`Listening to port ${process.env.PORT}`);
})
