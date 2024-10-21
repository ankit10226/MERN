const ToDoList = require("./../Models/ToDoList");

exports.addToDoList = async (req, res) => {
  try {
    const { payload } = req.body;

    if (!payload) {
      return res.status(400).json({ message: "Add New Item" });
    }

    const todolist = await ToDoList.create({
      item: payload,
    });

    res.status(201).json({
      todolist,
      message: "New Item added successfully",
    });
  } catch (err) {
    console.error("Signup error:", err);

    if (err.name === "SequelizeUniqueConstraintError") {
      const errorMessages = err.errors.map((e) => e.message);
      return res.status(400).json({ message: errorMessages.join(", ") });
    }
    res.status(500).json({ message: err.message || "An error occurred" });
  }
};

exports.getToDoList = async (req, res) => {
  try {
    let todolist = await ToDoList.findAll({});

    res.json({ data: todolist });
  } catch (error) {
    console.log(error);
    if (err.name === "SequelizeUniqueConstraintError") {
      const errorMessages = err.errors.map((e) => e.message);
      return res.status(400).json({ message: errorMessages.join(", ") });
    }
    res.status(500).json({ message: err.message || "An error occurred" });
  }
};

exports.removeToDoList = async (req, res) => {
  try {
    const { payload } = req.body; 

    if (!payload) {
      return res.status(400).json({ message: "Add New Item" });
    }
    const delItem = await ToDoList.destroy({ where: { id: payload } });
    if (delItem) {
      res.json({
        status: true,
        message: "Item Deleted Successfully",
      });
    } else {
      res.status(404).json({
        status: false,
        message: "Item Not Found",
      });
    }
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      const errorMessages = err.errors.map((e) => e.message);
      return res.status(400).json({ message: errorMessages.join(", ") });
    }
    res.status(500).json({ message: err.message || "An error occurred" });
  }
};
