/**
 * Author : Faruq
 */
var mqtt = require('mqtt');
var mongoose = require('mongoose');
var config = require('./config/database');
var Coba = require("./model/coba.model");
mongoose.connect(config.database)

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
    var collectTo = saveToDb(message)
    console.log(collectTo)
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

function saveToDb(params) {
    var cobaPayload = new Coba({
        data: params
    })
    cobaPayload.save(function (err, coba) {
        if (err) {
            return "gagal menyimpan"
        }
        return "berhasil menyimpan"
    });
}



//publish
// function publish(topic,msg,options){
// console.log("publishing",msg);

// if (client.connected == true){

// client.publish(topic,msg,options);

// }
// count+=1;
// if (count==2) //ens script
// 	clearTimeout(timer_id); //stop timer
// 	client.end();	
// }

//////////////

// var options={
// retain:true,
// qos:1};
// var topic="testtopic";
// var message="test message";
// var topic_list=["topic2","topic3","topic4"];
// var topic_o={"topic22":0,"topic33":1,"topic44":1};
// console.log("subscribing to topics");
// client.subscribe(topic,{qos:1}); //single topic
// client.subscribe(topic_list,{qos:1}); //topic list
// client.subscribe(topic_o); //object
// var timer_id=setInterval(function(){publish(topic,message,options);},5000);
// //notice this is printed even before we connect
// console.log("end of script")