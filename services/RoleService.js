const DBOPS = require('../models/index');
const UserService = require('./UserService');
module.exports = {
    createRole : async function(data){
     try {
        const createRole= await DBOPS.Role.create({
            name:data.RoleName,
            description:data.RoleDescription
        });
        if(createRole){
            return createRole
        }
        else{
            return 'Something Wrong!'
        }
     } catch (error) {
        console.log(error.message)
        return{Status:0,Message:error.message,Error:error.errors}
     }
    },
    updateRole : async function(data,Id){
        try {
            const updatedRole = await DBOPS.Role.update(data,{where:{id:Id}})
            if(updatedRole){
                return await DBOPS.Role.findOne({where:{id:Id}})
            }
            else{
                return 'Something Wrong!'
            }
        } catch (error) {
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors}
        }
    },
    assignRole : async function(data){
        try {
            const assignedRole = await DBOPS.UserRole.create({
                roleId:data.roleId,
                userId:data.userId        
               });
               if(assignedRole){
                return assignedRole
            }
            else{
                return 'Something Wrong!'
            } 
        } catch (error) {
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors}
        }
    },
    getAllRoles : async function(){
       try {
        const allRoles = await DBOPS.Role.findAll();
        if (allRoles) {
            return allRoles
        } else {
            return 'Something Wrong!'
        }
       } catch (error) {
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors}
        }
    },
    getRole :async function(Id){
        try {
            const role = await DBOPS.Role.findOne({where:{id:Id}});
            if(role){
                return role;
            }
            else{
                return;
            }
        } catch (error) {
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors}
        }
    },
    removeUserRole : async function(data){
        try {
            const deletePermission = await DBOPS.UserRole.destroy({where:{roleId:data.roleId,
                userId:data.userId,}});
                if(!deletePermission){
                    return await UserService.getUser(data.userId);
                }
                else{
                    return 'Something Wrong!' 
                }          
        } catch (error) {
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors}
        }
    }
}
