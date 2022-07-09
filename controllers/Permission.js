const PermissionService = require('../services/PermissonService')
const { validationResult }
    = require('express-validator')
    
const createPermisson = async(req,res) =>{
    try {
        const data = validationResult(req)
    if (!data.isEmpty()) {
        res.status(400).json({error:data})
    }
    const createPermison = await PermissionService.createPermisson({...req.body})
    if(createPermison){
        res.status(200).json({Status:1,Data:createPermison})
    }
    else{
        res.status(200).json({Status:0,Message:"Something Wrong"})
    }

    } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error});
    }
} 
const updatePermissons = async(req,res) =>{
    try {
        const data = validationResult(req)
    if (!data.isEmpty()) {
        res.status(400).json({error:data})
    }
    let updateData = {
        name:req.body.name,
        description:req.body.description
    }
    const updatePermissons = await PermissionService.updatePermisson(updateData,req.body.roleId)
    if(updatePermissons){
        res.status(200).json({Status:1,Data:updatePermissons})
    }
    else{
        res.status(200).json({Status:0,Data:''})
    }
    } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error});  
    }
} 
const assignPermisson = async(req,res) => {
    try {
        const data = validationResult(req)
        if (!data.isEmpty()) {
            res.status(400).json({error:data})
        }
        const assignPermission = await PermissionService.assignPermisson({...req.body})
        if(assignPermission){
            res.status(200).json({Status:1,Data:assignPermission})
        }
        else{
            res.status(200).json({Status:0,Data:''})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error});
    }
}  
const getAllPermisson = async(req,res) => {
   try {
    const permissons = await PermissionService.getAllPermissons();
    if(permissons){
        res.status(200).json({Status:1,Data:permissons})
    }
    else{
        res.status(200).json({Status:0,Data:''})
    }
    
   } catch (error) {
    console.log(error);
    res.status(400).json({Status:0,Error:error}); 
   }
}
const removePermissons = async (req,res) =>{
    try{
    const data = validationResult(req)
    if (!data.isEmpty()) {
        res.status(400).json({error:data})
    }
     const deletePermission = await PermissionService.removeRolePermisson({...req.body})
    if(deletePermission){
        res.status(200).json({Status:1,Message:"Permisson removed from  Role",Data:deletePermission})
    }
    else{
        res.status(400).json({Status:0,Message:"Something Wrong"})
    }
} catch (error) {
    console.log(error);
    res.status(400).json({Status:0,Error:error});
}
}
module.exports = {createPermisson,updatePermissons,assignPermisson,getAllPermisson,removePermissons}