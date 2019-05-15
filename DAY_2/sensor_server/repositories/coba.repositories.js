var mongoose = require('mongoose');
var config = require('../config/database');
var Coba = require("../models/coba.model");
const socketApp = require('../socket/socket-app');
var ObjectId = require('mongoose').Types.ObjectId;

const cobaRepositories = {
  createData: async(payload)=>{
    var newData = new Coba({
        data:Number(payload)
    })
    let saveData = await newData.save()
    if(saveData){
        return saveData
    }
  }
}

module.exports = cobaRepositories