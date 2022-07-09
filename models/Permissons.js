const { db, syncModel } = require("../db");
const { DataTypes } = require("sequelize");

const Permissons = db.define("permissons", {
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

  syncModel(Permissons);

  module.exports = Permissons;