'use strict';

var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');

var app = express();

mongo.connect(process.env.DBURI, function (err, db) {

   if (err) {
      throw new Error(err);
   } else {
      console.log('Successfully connected to MongoDB.');
   }

   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app, db);
   
      var port = 3000;
      app.listen(process.env.PORT || port, function () {
            console.log('Node.js listening on port ' + port + '...');
      });

});
