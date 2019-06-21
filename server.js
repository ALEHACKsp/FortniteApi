// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// const Request = require("request");
// const cors = require('cors');
// app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // app.get('/api/store', function (req, res) {
// //   var options = {
// //     url: 'https://api.fortnitetracker.com/v1/store',
// //     method: 'GET',
// //     headers: {
// //       "TRN-Api-Key": "f92be6be-cb17-43c7-96e5-6a442ab5b65e"
// //     }
// //   };
// //   Request.get(options, (error, response,  body) => {
// //      if (error) {
// //           return console.dir(error);
// //       }
// //       const data = JSON.parse(body);
// //       res.status(200).send(data)
// //   });
 
// // });


// app.get('/api/stats', function (req, res) {
//   var username = req.query.username;
//   var options = {
//     url: `https://api.fortnitetracker.com/v1/profile/pc/${username}`,
//     method: 'GET',
//     headers: {
//       "TRN-Api-Key": "f92be6be-cb17-43c7-96e5-6a442ab5b65e"
//     }
//   };
//   Request.get(options, (error, response,  body) => {
//      if (error) {
//           return console.dir(error);
//      }
//       const data = JSON.parse(body);
//       res.status(200).send(data)
//   });
 
// });

// app.get('/api/history', function (req, res) {
//   var accountID = req.query.accountID;
//   var options = {
//     url: `https://api.fortnitetracker.com/v1/profile/account/${accountID}/matches`,
//     method: 'GET',
//     headers: {
//       "TRN-Api-Key": "f92be6be-cb17-43c7-96e5-6a442ab5b65e"
//     }
//   };
//   Request.get(options, (error, response,  body) => {
//      if (error) {
//           return console.dir(error);
//      }
//       const data = JSON.parse(body);
//       res.status(200).send(data)
//   });
 
// });

// app.listen(process.env.PORT || 8080);