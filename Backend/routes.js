const express = require('express');
const AuthController = require('./Controller/AuthController'); 
const ToDoListController = require('./Controller/ToDoListController');

const router = express.Router();
 
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);
router.post('/add-todolist', ToDoListController.addToDoList);
router.get('/get-todolist', ToDoListController.getToDoList);
router.post('/remove-todolist', ToDoListController.removeToDoList);

module.exports = router;

// app.get("/", async (req, res) => {
//   try {
//     const items = await UserModel.find().lean().exec();
//     res.json({ items });
//   } catch (err) {
//     res.status(500).end(err);
//   }
// });

// app.post("/createUser", async (req, res) => {
//   try {
//     const users = await UserModel.create(req.body.formData);
//     res.json({
//       users: users,
//       status: true,
//       message: "Data Added Successfully",
//     });
//   } catch (err) {
//     res.json(err);
//   }
// });

// app.get("/getUser/:id", async (req, res) => {
//   const userId = req.params.id;
//   try {
//     const items = await UserModel.find({ _id: userId });
//     res.json({ items });
//   } catch (err) {
//     res.status(500).end(err);
//   }
// });

// app.post("/updateUser/:id", async (req, res) => {
//   const userId = req.params.id;
//   try {
//     const users = await UserModel.findOneAndUpdate(
//       { _id: userId },
//       req.body.formData
//     );
//     res.json({
//       users: users,
//       status: true,
//       message: "Data Updated Successfully",
//     });
//   } catch (err) {
//     res.json(err);
//   }
// });

// app.get("/deleteUser/:id", async (req,res)=>{
//     const userId = req.params.id;
//     try {
//         const delUser = await UserModel.findByIdAndDelete(userId);
//         if (delUser) {
//             res.json({
//               status: true,
//               message: "User Deleted Successfully"
//             });
//           } else {
//             res.status(404).json({
//               status: false,
//               message: "User Not Found"
//             });
//           }
//     } catch (error) {
//         res.status(500).json({
//             status: false,
//             message: "An error occurred",
//             error: error.message
//         });
//     }
// })
