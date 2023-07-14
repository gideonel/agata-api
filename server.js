var express = require('express');
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const UserAgent = require('user-agents'); 
   
const userAgent = new UserAgent();
console.log(JSON.stringify(userAgent.data, null, 1));


mongoose.connect('mongodb+srv://Codegod:Iamcodegod5678@quickcess.a61yd9e.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});


app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));

var index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure


//  const accountSid = "AC06e7166b2ccbb91e20c719744165a53b";
//  const authToken = "eb4bb7042823d1e22c641eb46672af1b";
//  const verifySid = process.env.VERIFY_SID;
//  const client = require("twilio")(accountSid, authToken);


 const accountSid = "AC06e7166b2ccbb91e20c719744165a53b";
 const authToken = "eb4bb7042823d1e22c641eb46672af1b";
 const verifySid = "VAd58adec5e661168523314e5b9506a0e7";
 const client = require("twilio")(accountSid, authToken);

//  client.messages
//    .create({
//     body: 'Hello from twilio-node',
//     from: '+2347085971914', // From a valid Twilio number
//     to:'+2347085971914', // Text your number
//    })
//    .then((message) => console.log(message.sid));

// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure


//  client.verify.v2
//    .services(verifySid)
   //.verifications.create({ to: "+2347085971914", channel: "sms" })
   //.verifications.create({ to: "+2347085971914", channel: "whatsapp" })
   //.verifications.create({ to: "+2347085971914", channel: "phone" })
  //.verifications.create({ to: "+2347085971914", channel: "phone" })
  //  .verifications.create({ to: "+2348053369550", channel: "call" })
  //  .then((verification) => console.log(verification.status))
  //  .then(() => {
  //    const readline = require("readline").createInterface({
  //      input: process.stdin,
  //      output: process.stdout,
  //    });
  //    readline.question("Please enter the OTP:", (otpCode) => {
  //      client.verify.v2
  //        .services(verifySid)
  //        .verificationChecks.create({ to: "+2347085971914", code: otpCode })
  //        .then((verification_check) => console.log(verification_check.status))
  //        .then(() => readline.close());
  //    });
  //  });
//tttthgggggggggggggggg

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server is started on http://127.0.0.1:'+PORT);
});