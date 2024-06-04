import app from "./app.js"
import UserModel from "./Models/Users.js";

app.post("/createUser", (req,res)=>{ 
    UserModel.create(req.body.formData)
    .then(users => res.json({
        users:users,
        status:true,
        message:'Data Added Successfully'
    }))
    .catch(err => res.json(err)) 
});