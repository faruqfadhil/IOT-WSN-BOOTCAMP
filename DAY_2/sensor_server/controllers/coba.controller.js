var mongoose = require('mongoose');
var config = require('../config/database');
var cobaRepositories = require('../repositories/coba.repositories');
var Response = require('../services/Response');

module.exports = {
  createData: async(req,res)=>{
      var response = new Response()
      try{
          response.setData(await cobaRepositories.createData(req.body.data))
      }catch(e){
          response.setStatus(false)
          response.setMessage(e)
      }
      res.json(response)
  }
}
