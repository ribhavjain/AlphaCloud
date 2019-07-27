
var express = require('express');
var app = express();
var mailer = require('express-mailer');
var mongojs = require('mongojs');
var db = mongojs('surveyCentral', ['surveyCentral']);
var bodyParser = require('body-parser');
var session = require('express-session');
var Promise = require('promise');
var ActiveDirectory = require('activedirectory');
var path = require('path');
var soap = require('soap');
var multer = require('multer');
const cors = require('cors');

var idleTimeoutSeconds = 1800; // AUTOMATICALLY LOG OUT AFTER 31 MINUTES

// For image loading
app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({extended: false }));

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors()); // enable all cors requests

app.use(session({
  secret: 'sefueiuseiushiuehsiue',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: idleTimeoutSeconds * 1000,
  }, 
  rolling: true,
  logged_in: false,
}));

var sentOnce;


app.post('/getOneTasks', function(req, res) {
  console.log(req.body["task_id"])
  db.tasks.find({_id: mongojs.ObjectId(req.body["task_id"])}, function(err, doc) {
    if (err) {
      res.json(err);
    } else {
      res.json(doc);
    }
  });
});


app.post('/submit_task', function (req, res) {
  
  var send_to_email_address = req.body["task"].email;

  var nodemailer = require('nodemailer');
  console.log(req.body["task"]);
  db.tasks.insert(req.body["task"], function (err, doc) {
    if(err) {
      res.send(err);
    } else {
      
      // Email confirmation
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'helpoutster@gmail.com',
          pass: 'plshelpppl'
        }
      });
      
      var mailOptions = {
        from: 'helpoutster@gmail.com',
        to: send_to_email_address,
        subject: 'HelpOut: Task Posting Confirmed!',
        text: 'A trained volunteer will contact you soon to HelpOut!'
      }
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.json({"message": "Success"});
    }
  })
})


app.post('/submittaskaccepted', function (req, res) {
  
  // var task_title = req.body["task"].taskTitle;
  // var task_summary = req.body["task"].taskSummary;
  // var address = req.body["task"].address;
  // var language = req.body["task"].language;
  // var date = req.body["task"].date;
  var send_to_email_address = req.body["emailv"];
  console.log(send_to_email_address)
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'helpoutster@gmail.com',
      pass: 'plshelpppl'
    }
  });
  
  var mailOptions = {
    from: 'helpoutster@gmail.com',
    to: send_to_email_address,
    subject: 'HelpOut: Task Accepted!',
    text: 'The person in need has been informed! They will reach out to you shortly!'
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  send_to_email_address = req.body["emailr"];
  mailOptions = {
    from: 'helpoutster@gmail.com',
    to: send_to_email_address,
    subject: 'HelpOut: Your Task was Accepted!',
    text: 'Your task has been accepted by a volunteer! You can reach out to them at' + req.body["emailv"],
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.json({"message": "Success"});
})

app.post('/getAllTasks', function(req, res) {
  db.tasks.find({orgID: req.body["org_id"]}, function(err, doc) {
    if (err) {
      res.json(err);
    } else {
      res.json(doc);
    }
  });
})

var sentOnce;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('*', function (req, res) {
  console.log('I received a GET request');
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
//Sho
app.post('/addUser', function (req,res){
  console.log(req.body);
  db.users.insert(req.body, function(err, doc) {
    if (err) {
      console.log('ERROR: ' +JSON.stringify(err));
    } else {
      res.json({"message" : "User Added Successfully"});
    }
  });
})


app.post('/logout', function (req, res) {
  req.session.isAuthenticated = false;
  res.json({isAuthenticated :req.session.isAuthenticated, loggedInUsername :req.session.loggedInUserGivenName});
});


app.listen(4200);
console.log("Server running on port 4200");
