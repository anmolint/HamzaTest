const router = require("express").Router();
const validator =require('../validator/validator')
const accessMiddleWare= require("../middleware/Authorization")
const UserController = require("../controllers/User")
const RoleController = require("../controllers/Role")
const PermissonController = require("../controllers/Permission")
const RoutePermissonController = require("../controllers/RoutePermissons");

router.post("/register",validator.validRegistor, UserController.register);
router.post("/login",validator.validLogin,UserController.login)
router.get("/all_users",accessMiddleWare, UserController.getUsers);
router.post("/create_role",validator.validRoleCreate ,accessMiddleWare, RoleController.createRoles)
router.post("/assign_roles",validator.validRoleAssign,accessMiddleWare, RoleController.assignRole);
router.put("/update_roles",validator.validRoleUpdate,accessMiddleWare, RoleController.updateRole);
router.get('/all_Roles',accessMiddleWare,RoleController.getAllRoles)
router.delete('/remove_userRole',accessMiddleWare,RoleController.removeUserRoles)
router.post('/create_Permisson',validator.validPermissonCreate,accessMiddleWare,PermissonController.createPermisson);
router.post('/assign_Permisson',validator.validPermissonAssign,accessMiddleWare,PermissonController.assignPermisson);
router.put('/update_Permisson',validator.validPermissonUpdate,accessMiddleWare,PermissonController.updatePermissons);
router.get('/all_Permissons',accessMiddleWare,PermissonController.getAllPermisson)
router.post('/create_Route_Permission',validator.validRoutePermisson,accessMiddleWare, RoutePermissonController.createRoutePermisson);
router.put('/update_Route_Permisson',validator.validRoutePermissonUpdate,accessMiddleWare,RoutePermissonController.updateRoutePermisson);
module.exports = router;