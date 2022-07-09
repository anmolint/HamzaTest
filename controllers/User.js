const { validationResult } = require('express-validator');
const UserService = require('../services/UserService')

const register = async (req, res) => {
    try {
      const data = validationResult(req)
      if (!data.isEmpty()) {
          res.status(400).json({error:data})
      }
      if(req.body.password!==req.body.confpass){
        res.status(400).json("passwords do not match")
      }
      const userCreate =await UserService.register({ ...req.body })
      if(userCreate){
        res.status(200).json(userCreate)
      }
      else{
        res.status(400).json({Status:0,Error:"Something Wrong!"})
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({Status:0,Error:error});
    }
  };

const login = async (req, res) => {
    try {  const data = validationResult(req)
      if (!data.isEmpty()) {
          res.status(400).json(data)
      }
     const loggedIn = await UserService.LoginService(req.body.username,req.body.password)
     if(loggedIn.Status === 1){
      res.status(200).json(loggedIn)
     }
     else{
      res.status(400).json(loggedIn)
     }
    } catch (error) {
      console.log(error);
      res.status(400).json({Status:0,Error:error});
    }
  };

const getUsers = async(req,res) => {
    try {
        const users = await UserService.getUsers();
        if(users){
        res.status(200).json({Status:1,Data:users})
        }
        else{
        res.status(200).json({Status:0,Error:'Something Wrong!'})
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({Status:0,Error:error});
    }
  }

module.exports = {register,getUsers,login}