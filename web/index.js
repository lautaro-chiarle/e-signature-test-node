
const express = require('express');
const app = express();

function startServer(port){
   const expressSwagger = require('express-swagger-generator')(app);
   require('./routes')(app);
   
   let options = {
       swaggerDefinition: {
           info: {
               description: 'Test for Backend Developer role.',
               title: 'Lobby Wars',
               version: '0.0.1',
           },
           host: 'localhost:'+port,
           basePath: '/v1',
           produces: [
               "application/json",
               "application/xml"
           ],
           schemes: ['http'],           
       },
       basedir: __dirname, //app absolute path
       files: ['./routes/**/*.js'] //Path to the API handle folder
   };
   expressSwagger(options)

   let server = app.listen(port);   
   console.log("Listening on port: "+port);
   return server;
}

exports.startServer = startServer;
exports.app = app;