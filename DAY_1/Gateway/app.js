/**
 * Author : Faruq
 */
var mqtt = require('mqtt');
var mongoose = require('mongoose');
var config = require('./config/database');
var Coba = require("./model/coba.model");
var outApi = require('./services/Outapi');
// comment this when no mongo DB installed on your server
// mongoose.connect(config.database)

var topic = "esp/test"
var client = mqtt.connect("mqtt://192.168.1.103", {
    username: "seecow",
    password: "frq03051997"
});
console.log("connected flag  " + client.connected);

//handle incoming messages
client.on('message', function (topic, message, packet) {
    console.log("message is " + message);
    console.log("topic is " + topic);
    // comment this when no mongo DB installed on your server
    var payData = Number(message)
    // method.saveToDb(message)
    method.toServer(payData)
});


client.on("connect", function () {
    console.log("connected  " + client.connected);
    client.subscribe(topic);
})
//handle errors
client.on("error", function (error) {
    console.log("Can't connect" + error);
    process.exit(1)
});

const method ={
    toServer: async(data)=>{
        let result = await outApi.uploadTo(data)
        console.log("uploade")
        return result
    },
    saveToDb: async(params)=>{
        var cobaPayload = new Coba({
            data: params
        })
        cobaPayload.save(function (err, coba) {
            if (err) {
                console.log("gagal menyimpan")
            }
            console.log("berhasil menyimpan")
        });
    }
}
