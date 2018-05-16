let messages = [];

// messagesCtrl in server file
// module.exports = {
// Get info about a single object - GET
//read: function (req, res) {

module.exports = {
    // Get info about a single object
    read: function (req, res) {

    },
    // Get a whole bunch of objects
    list: function (req, res) {
        res.send(messages);
    },
    // Make a new object
    create: function (req, res) {
        messages.push(`${req.body.name} said ${req.body.message}`)
        res.send('Message Received');
    },
    // Update an existing object
    update: function (req, res) {

    },
    // Delete an existing object
    delete: function (req, res) {

    }
}