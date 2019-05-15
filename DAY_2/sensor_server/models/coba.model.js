var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CobaSchema = new Schema({
  data: {
    type: Number
  }
});

module.exports = mongoose.model('Coba', CobaSchema);
