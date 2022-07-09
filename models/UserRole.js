const { db, syncModel } = require("../db");
const { DataTypes } = require("sequelize");
const Role = require("./Role");
const User = require("./User");
const UserRole = db.define("UserRole", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  roleId: {
    type: DataTypes.UUID,
    references: {
      model: "roles",
      key: "id",
    },
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: "users",
      key: "id",
    },
  },
});

Role.belongsToMany(User, { through: UserRole });
User.belongsToMany(Role, { through: UserRole });

syncModel(UserRole);

module.exports = UserRole;
