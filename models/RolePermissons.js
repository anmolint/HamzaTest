const { db, syncModel } = require("../db");
const { DataTypes } = require("sequelize");
const Role = require("./Role");
const Permissions = require("./Permissons");
const RolePermissons = db.define("rolePermissons", {
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
  permissonId: {
    type: DataTypes.UUID,
    references: {
      model: "permissons",
      key: "id",
    },
  },
});

Role.belongsToMany(Permissions, { through: RolePermissons });
Permissions.belongsToMany(Role, { through: RolePermissons });

syncModel(RolePermissons);

module.exports = RolePermissons;
