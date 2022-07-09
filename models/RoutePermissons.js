const { db, syncModel } = require("../db");
const { DataTypes } = require("sequelize");

const RoutePermissons = db.define("routePermissons", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    routename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PermissonId: {
      type:DataTypes.ARRAY(DataTypes.UUID),
    },
  });

  syncModel(RoutePermissons);

  module.exports = RoutePermissons;