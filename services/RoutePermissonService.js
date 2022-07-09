const DBOPS = require('../models/index');
module.exports={
    createRoute:async function(data){
     try {
        const routeCreate = await DBOPS.RoutePermissons.create({
            routename:data.routename,
            PermissonId:data.PermissonIds
        })
        if(routeCreate){
            return routeCreate
        }
        else{
            return 'Something Wrong!'
        }
     } catch (error) {
        console.log(error.message)
        return{Status:0,Message:error.message,Error:error.errors}
     }
    },
    updatePermissons : async function(Id,data){
        try {
            const updatedRoute = await DBOPS.RoutePermissons.update({PermissonId:data},{where:{id:Id}})
            if(updatedRoute){
                return await DBOPS.RoutePermissons.findOne({where:{id:Id}})
            }
            else{
                return 'Something Wrong!'
            }
        } catch (error) {
        console.log(error.message)
        return{Status:0,Message:error.message,Error:error.errors} 
        }
    },
    getRoutePermissonsByRoute : async function(route){
        try {
           const routePermissons =await DBOPS.RoutePermissons.findOne({where:{routename:route}})
           if(routePermissons){
            return routePermissons.PermissonId
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