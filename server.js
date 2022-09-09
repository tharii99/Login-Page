const express = require('express');
const cors = require('cors');
const { request } = require('express');
const app = express();
const bodyParser = require('body-parser'); // middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.post('/login', (req, res) => {
  let u_Email = req.body.email;
  let u_Password = req.body.password;

  console.log(" checking Postman",{u_Email,u_Password},req.body)
  if(u_Email == 'admin@circles.asia' && u_Password == 'cc'){
    res.send({
      token: 'success'
    })
  }
  else{
    res.send({
      token: 'Unsuccesful try again'
    })
  }


  // app.get('/login', (req, res) => {
//   res.send({
//     token: 'a_guid'
//   });
// });

// app.post('/login', (req, res) => {
//   res.send({
//     token: 'success'
//   })
//   console.log("GG")
// });

  // res.send({
  //   'email': u_Email,
  //   'password': u_Password
  // });
})



app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
