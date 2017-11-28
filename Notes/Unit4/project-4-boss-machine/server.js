const express = require('express');
const app = express();

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

// Add middware for parsing request bodies here:
//Set up body-parsing middleware with the body-parser packagae.
const bodyParser = require('body-parser');
app.use(bodyParser.json());



// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api.js');
app.use('/api',apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT,function () {
    console.log("Server is listening on port: ", PORT);
  })
}
