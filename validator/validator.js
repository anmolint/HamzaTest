const { check } = require('express-validator')
const validRegistor = [
    check('username', 'username cant be empty').not().isEmpty(),
    check('password', "password cant be empty").not().isEmpty(),
    check('confpass', 'cannot be empty').not().isEmpty(),
    check('email', 'email cant be empty').exists().isEmail(),
    check('firstname', 'firstname cant be empty').not().isEmpty(),
    check('lastname', 'lastname cant be empty').not().isEmpty(),
];
const validLogin = [
    check('username', 'username cannot be empty').not().isEmpty(),
    check('password', 'password cannot be empty').not().isEmpty(),
]
const validRoleCreate = [
    check("RoleName","Role Name Cannot Be empty").not().isEmpty(),
    check("RoleDescription","Role Description cannot be empty").not().isEmpty()
]
const validRoleAssign =[
    check("roleId","Role Id is required cannot be empty").not().isEmpty(),
    check("userId","User Id is required and cannot be empty").not().isEmpty()
]
const validRoleUpdate = [
    check("roleId","Role Id cannot Be empty").not().isEmpty(),
    check("name","Role Name Cannot Be empty").not().isEmpty(),
    check("description","Role Description cannot be empty").not().isEmpty()
]
const validRoleDelete = [
    check("userId","userId cannot be empty").not().isEmpty(),
    check("roleID","RoleId is required and cannot be empty").not().isEmpty()
]
const validPermissonCreate = [
    check("Permisson","Permisson name Cannot Be empty").not().isEmpty(),
    check("PermissonDescription","Role Description cannot be empty").not().isEmpty()
]
const validPermissonAssign =[
    check("roleId","Role Id is required cannot be empty").not().isEmpty(),
    check("permissonId","Permisson Id is required and cannot be empty").not().isEmpty()
]
const validPermissonUpdate = [
    check("id","Role Id cannot Be Empty").not().isEmpty(),
    check("name","Role Name Cannot Be empty").not().isEmpty(),
    check("description","Role Description cannot be empty").not().isEmpty()
]
const validRoutePermisson = [
    check("routename","Route name is reqired cannot be empty").not().isEmpty(),
    check("PermissonIds","Routes Permisson Ids cannot be empty").not().isEmpty()
]
const validRoutePermissonUpdate = [
    check("id","RoutePermissonId is required for this operation").not().isEmpty(),
    check("permissonIds","Permisson Ids are required when updating cannot be empty").not().isEmpty()
]

module.exports = {  
                    validRegistor,
                    validLogin,
                    validRoleCreate,
                    validRoleAssign,
                    validRoleUpdate,
                    validRoleDelete,
                    validPermissonCreate,
                    validPermissonAssign,
                    validPermissonUpdate,
                    validLogin,
                    validRoutePermisson,
                    validRoutePermissonUpdate
                }