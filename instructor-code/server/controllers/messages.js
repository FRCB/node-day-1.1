let messages = [];

// messagesCtrl in server file
module.exports = {
  // Get info about a single object - GET
  read:function(req, res){

  },
  // Get a whole bunch of objects - GET 
  list:function(req, res){
    res.send(messages);
  },
  // Make a new object - POST
  create:function(req, res){
    messages.push(`${req.body.name} said ${req.body.message}`)
    res.send('Message Recieved');
  },
  // Update an existing object - PUT / PATCH
  update:function(req, res){

  },
  // Delete an existing object - DELETE
  delete:function(req, res){

  },
}
// Make changes;