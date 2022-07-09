const UserPermissons = require("./RolePermissons");

module.exports = {
    User: require("./User"),
    Role: require("./Role"),
    UserRole: require("./UserRole"),
    Permissions:require('./Permissons'),
    RolePermissons:require('./RolePermissons'),
    RoutePermissons:require('./RoutePermissons')
  };