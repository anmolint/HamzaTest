const RoutePermissonService = require('../services/RoutePermissonService')
const { validationResult }
    = require('express-validator')
const createRoutePermisson = async(req,res)=>{
try {
    const data = validationResult(req)
    if (!data.isEmpty()) {
        res.status(400).json({Error:data})
    }
    const createData = await RoutePermissonService.createRoute({...req.body});
    if(createData){
        res.status(200).json({Status:1,Data:createData})
    }
    else{
        res.status(200).json({Status:0,Error:"Something Wrong!"})
    }
} catch (error) {
    console.log(error);
    res.status(400).json({Status:0,Error:error});
}
}
const updateRoutePermisson = async(req,res)=>{
    try {
        const data = validationResult(req)
        if (!data.isEmpty()) {
            res.status(400).json({Error:data})
        }
        const addPermisson = await RoutePermissonService.updatePermissons(req.body.id,req.body.permissonIds)
        if(addPermisson){
            res.status(200).json({Status:1,Data:addPermisson})
        }
        else{
            res.status(200).json({Status:0,Error:"Something Wrong!"})
        } 
    } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error}); 
    }
}

module.exports={createRoutePermisson,updateRoutePermisson}