//define the minion router
const minionsRouter = require('express').Router();
//methods to import into the file
const { getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId } = require('./db');

//set the id parameter
minionsRouter.param('minionId', (req, res, next, id) => {
  //Looks for the minion per the ID passed
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    //sets that minion in the request if it exists
    req.minion = minion;
    next();
  } else {//returns 404 b/c the minion doesnt exist
    res.status(404).send();
  }
});

// Get all minions
minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

// Get a specific minion
minionsRouter.get('/:minionId', (req, res, next) => {
//response is the specific minion that was set in the paramters
  res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
  //updates the minion in the db
  //sends the updated minion over in the response
  res.send(updateInstanceInDatabase('minions',req.body));
})

//add a new minion to the db
minionsRouter.post('/', (req,res,next) => {
  //adds the minion to the db
  //send the newly added minion in a response
  res.status(201).send(addToDatabase('minions',req.body))
})

//delete a minion from the db
minionsRouter.delete('/:minionId', (req, res, next) => {
  //deletes the particular minion from the database
  deleteFromDatabasebyId("minions", req.params.minionId );
  //sends the response 204
  res.status(204).send();
})


//export the router
module.exports = minionsRouter;
