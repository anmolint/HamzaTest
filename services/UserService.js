const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const DBOPS = require('../models/index')
const Roles = require('../models/Role');
const  Permissions  = require('../models/Permissons');
require("dotenv").config();

module.exports = {
    register :async function(data){
        try{
            console.log(data)
        let saltRounds = await bcrypt.genSalt(10);
        let encrypt = await bcrypt.hashSync(data.password, saltRounds);
        let UserCreate = await DBOPS.User.create({
          username: data.username,
          password: encrypt,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname
        });
        let token = jwt.sign({ user_id: UserCreate.id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        if(UserCreate){
        return {Status:1,token:token};
        }
        return;}
        catch(error){
            console.log(error.message)
            return{Status:0,Message:error.message,Error:error.errors}
        }
    },
    getUsers : async function(){
        try {
            const users = await DBOPS.User.findAll({
                include: 
            {
              model:Roles,
              include:{
                model:Permissions,
                attributes: {exclude:["createdAt","updatedAt","id","UserPermissons"]}
              },
              attributes: {exclude:["createdAt","updatedAt","id"]}
            },
            attributes: {exclude:["createdAt","updatedAt","password"]}
            })
            if(users){
                return users;
            }
            else{
                return;
            }
        } catch (error) {
            console.log(error.message)
            return{Status:0,Error:error.errors}
        }
        },
    getUser : async function(Id){
        try {
            const user = await DBOPS.User.findOne({
                include: 
            {
              model:Roles,
              include:{
                model:Permissions,
                attributes: {exclude:["createdAt","updatedAt",]}
              },
              attributes: {exclude:["createdAt","updatedAt","id"]}
            },
            attributes: {exclude:["createdAt","updatedAt","password"]},
            where:{id:Id}
            })
            if(user){
                return user;
            }
            else{
                return;
            } 
        } catch (error) {
            console.log(error.message)
            return{Status:0,Error:error.errors}
        } 
    },
    LoginService :async function(user,password){
        try {
            let userData = await DBOPS.User.findOne({
                where: { username: user },
              });
              if (userData) {
                  let decryption = await bcrypt.compare(password, userData.password);
                  if (decryption === true) {
                    let token = jwt.sign({ user_id: userData.id }, process.env.JWT_SECRET_KEY, {
                      expiresIn: "1h",
                    });
                    return {Status:1,message:"Logged In Sucessfully",token:token};
                  }
                  else if(decryption === false){
                    return {Status:0,message:"Invalid password"}
                  }
              } else {
                return {Status:0,message:"Invalid Entry Username not found"};
              } 
        } catch (error) {
            console.log(error.message)
            return{Status:0,Error:error.errors} 
        } 
    }   
    }
