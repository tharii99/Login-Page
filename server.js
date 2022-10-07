const express = require('express');
const cors = require('cors');
const { request } = require('express');
const app = express();
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.post('/login', (req, res) => {
  let u_Email = req.body.email;
  let u_Password = req.body.password;
  

  console.log(" checking Postman",{u_Email,u_Password},req.body)
  if(u_Email == 'admin@hello.world' && u_Password == 'cc'){
    console.log("HTTP Status : ",res.statusCode)
    
    res.status(200).send({
      token : Date.now(),
    })  
  }
  else{
    console.log("HTTP Status : ",res.statusCode)
    res.status(400).send({
      message : 'The details you entered does not match to any account in the Database',
      token : ''
    })
  }

})



app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
