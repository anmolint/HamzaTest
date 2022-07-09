const { db, syncModel } = require("../db");
const {  DataTypes } = require("sequelize");
const Roles = db.define("roles", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type:DataTypes.STRING,
    allowNull: false,
  },
});

syncModel(Roles);

module.exports = Roles;