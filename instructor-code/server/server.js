const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const messagesCtrl = require('./controllers/messages');

let messages = [];

// req.params.a/b
// req.query.a/b
// req.body.a/b

// function add(a, b){
//   return a + b
// }

app.use(bodyParser.json()); 
                    // Request  / Response 
app.get('/api/msg', messagesCtrl.list);
// app.get('/api/msg/:id', messagesCtrl.read);
app.post('/api/msg', messagesCtrl.create);
// app.put('/api/msg/:id', messagesCtrl.update);
// app.delete('/api/msg/:id', messagesCtrl.delete);

            // : params required things for endpoint to work
app.get('/api/msg/:name/:message', (req, res)=>{
  console.log(`${req.params.name} said ${req.params.message}`)
  res.send('Thanks for particpating');
})

app.get('/api/msg/:name', (req, res)=>{
  console.log(req.query);
  if (typeof req.query.exclamation === "string"){
    console.log(`${req.params.name} yelled ${req.query.exclamation.toUpperCase()}`)
    return res.status(200).send('THANKS FOR PARTICIPATING');
  }
  return res.status(400).send('Hey there was an error, please fix');
})


// axios.post('/api/msg', 
//   {name:'Brack', message:'Sushi is the best.'});

app.listen(port, ()=>{
  console.log("Listening on port: " + port);
})

