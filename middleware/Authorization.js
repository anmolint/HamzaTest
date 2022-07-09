const jwt = require("jsonwebtoken");
const RoutePermissonService = require("../services/RoutePermissonService");
const UserService = require('../services/UserService')
require("dotenv").config();
const tokenVerification = async (req, res, next) => {
  try {
    const bearerhead = req.headers["authorization"];
    const bearsplit = bearerhead.split(" ");
    const tkn = bearsplit[1];
    if (!tkn) {
     res.status(400).json({Error:"unauthorized"});
    } else {
      let decode = jwt.verify(tkn, process.env.JWT_SECRET_KEY);
      let user = await UserService.getUser(decode.user_id)
      let roles = user.roles
      let PermissionIds = [];
      for(const role of roles){
        let permissons= role.permissons
        for(const permisson of permissons){
          PermissionIds.push(permisson.id)
        }
      } 
      let routePermissons = await RoutePermissonService.getRoutePermissonsByRoute(req.originalUrl)
      const found = PermissionIds.some(el=> routePermissons.includes(el))
      if (found) {
        req.user = user;
        next();
      } else {
       res.status(400).json("you dont have reqired permission");
      }
    }
  } catch (error) {
    console.log(error);
    res.
      status(400).
       json({error:"authorization reqired"})
    ;
  }
};
module.exports = tokenVerification;