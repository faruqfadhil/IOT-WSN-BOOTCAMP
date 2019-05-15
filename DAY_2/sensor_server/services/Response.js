class Response{
    constructor () {
      this.status = true
      this.message = ""
      this.data = {}
    }
  
    setStatus (status) {
      this.status = status
    }
  
    setMessage (message) {
      this.message = message
    }
  
    setData (data) {
      this.data = data
    }
  
    static unAuthorized () {
      let response = new Response()
      response.setStatus(false)
      response.setMessage("Unauthorized !")
      return response
    }
  }
  
  module.exports = Response