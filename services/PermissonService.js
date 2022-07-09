const DBOPS = require('../models/index')
const RoleService = require('./RoleService')
module.exports = {
    createPermisson: async function(data){
        try {
            const createPermison = await DBOPS.Permissions.create({
                name:data.Permisson,
                description:data.PermissonDescription
            })
            if(createPermison){
                return createPermison
            }
            else{
                return 'Something Wrong!'
            }
        } catch (error) {
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors} 
        }
    },
    updatePermisson : async function(data,Id){
        try {
            const updatedRole = await DBOPS.Permissions.update(data,{where:{id:Id}})
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
    assignPermisson : async function(data){
        try {
            const assignedPermisson = await DBOPS.RolePermissons.create({
                roleId:data.roleId,
                permissonId:data.permissonId        
               });
               if(assignedPermisson){
                return assignedPermisson
            }
            else{
                return 'Something Wrong!'
            } 
        } catch (error) {
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors}
        }
    },
    getAllPermissons : async function(){
        try {
         const allPermissons = await DBOPS.Permissions.findAll();
         if (allPermissons) {
             return allPermissons
         } else {
             return 'Something Wrong!'
         }
        } catch (error) {
             console.log(error.message)
             return{Status:0,Message:error.message,Error:error.errors}
         }
     },
     removeRolePermisson : async function(data){
        try {
            const deletePermission = await DBOPS.RolePermissons.destroy({where:{roleId:data.roleId,
                permissonId:data.permissonId,}});
                if(!deletePermission){
                    return await RoleService.getRole(data.roleId);
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