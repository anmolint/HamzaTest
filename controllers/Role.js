const RoleService = require('../services/RoleService')
const { validationResult }
    = require('express-validator')
    
const createRoles = async(req,res) => {
    try{
    const data = validationResult(req)
    if (!data.isEmpty()) {
        res.status(400).json({error:data})
    }
    const createRole= await RoleService.createRole({...req.body})
    if(createRole){
        res.status(200).json({Status:1,Data:createRole})
    }
    else{
        res.status(200).json({Status:0,Error:"Something Wrong!"})
    }
  }
  catch(error){
    console.log(error);
    res.status(400).json({Status:0,Error:error});
  }
}
const updateRole = async(req,res) => {
    try {
        const data = validationResult(req)
    if (!data.isEmpty()) {
        res.status(400).json({error:data})
    }
    let updateData = {
        name:req.body.name,
        description:req.body.description
    }
    const updateRole = await RoleService.updateRole(updateData,req.body.roleId)
    if(updateRole){
        res.status(200).json({Status:1,Data:updateRole})
    }
    else{
        res.status(200).json({Status:0,Error:"Something Wrong!"})
    }
    } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error});  
    }
}
const assignRole = async(req,res) => {
    try {
        const data = validationResult(req)
        if (!data.isEmpty()) {
            res.status(400).json({error:data})
        }
        const assignRole = await RoleService.assignRole({...req.body})
        if(assignRole){
            res.status(200).json({Status:1,Data:assignRole})
        }
        else{
            res.status(200).json({Status:0,Error:"Something Wrong!"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error});
    }
}
const getAllRoles = async(req,res)=> {
    try {
        const Roles = await RoleService.getAllRoles();
        if(Roles){
            res.status(200).json({Status:1,Data:Roles})
        }
        else{
            res.status(200).json({Status:0,Data:''})
        }
       } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error}); 
       }
}
const removeUserRoles = async (req,res) => {
    try{
        const data = validationResult(req)
        if (!data.isEmpty()) {
            res.status(400).json({error:data})
        }
        const deletePermission = await RoleService.removeUserRole({...req.body})
        if(deletePermission){
            res.status(200).json({Status:1,Message:"Role removed from User"})
        }
        else{
            res.status(400).json({Status:0,Message:"Something Wrong"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error});
    }
}
module.exports = {createRoles,updateRole,assignRole,getAllRoles,removeUserRoles}