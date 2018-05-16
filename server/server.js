const express = require('express');
const app = express();
const port = 3030; // more than 3001 to be in a safe range
const bodyParser = require('body-parser');
const messagesCtrl = require('./controllers/messages')

let messages = [];

app.use(bodyParser.json());

app.get('/api/msg', messagesCtrl.list);
//app.get('/api/msg/:id', messagesCtrl.read);
app.post('/api/msg', messagesCtrl.create);
//app.put('/api/msg/:id', messagesCtrl.update);
//app.delete('/api/msg/:id', messagesCtrl.delete);


// 3 ways to send information to our server:

// *** parameters ***
app.get('/api/msg/:name/:message', (req, res) => {
    // params require things for endpoint to work
    console.log(`${req.params.name} said ${req.params.message}`)
    res.send('Thanks for participating')
})
// localhost:3030/api/msg/Thor/where_is_my_hammer

// *** queries ***
app.get('/api/msg/:name', (req, res) => {
    if (typeof req.query.msg === "string") {
        console.log(`${req.params.name} yelled ${req.query.msg}`)
        res.status(200).send('THANKS FOR PARTICIPATING');
    }
    res.status(400).send('Hey there was an error, please fix');
})
// localhost:3030/api/msg/France?msg=Hello

// *** bodies ***
// need to add on top of the file : app.use(bodyParser.json());

// app.post('/api/msg', (req, res) => {
//     messages.push(`${req.body.name} said ${req.body.message}`)
//     res.send('Message Received');
// })

// in BODY > raw > JSON (app/json) object : {
//	"name": "France",
//	"message": "I love sushis"
//}

// after that... > GET , send again and see all the messages that have been push in our message array

// axios.post('/api/msg', 
//   {name:'France', message:'Sushi is the best.'});


app.listen(port, () => {
    console.log("Listening on port: " + port);
})

