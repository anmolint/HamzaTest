const { db, syncModel } = require("../db");
const { DataTypes } = require("sequelize");

const User = db.define("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true }, 
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
  });
  
  syncModel(User);
  module.exports = User;