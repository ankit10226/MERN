const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize"); 
const ToDoList = sequelize.define(
  "ToDoList",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
  },
  {
    tableName: "todolist",
    timestamps: true,
  }
);

module.exports = ToDoList;
