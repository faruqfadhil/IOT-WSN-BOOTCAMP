const axios = require('axios');
var Api = require("../services/url")
const OutApi = {
    uploadTo: async(data)=>{
        let result = await axios.post(Api.cobaUrl()+'create', {
            data: data
          })
        return result
    }
}
module.exports = OutApi