//define the ideas router
const ideasRouter = require('express').Router();
//methods to import into the file
const { getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId } = require('./db');

//million dollar idea
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

//set the id parameter
ideasRouter.param('ideaId', (req, res, next, id) => {
  //Looks for the idea per the ID passed
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    //sets that idea in the request if it exists
    req.idea = idea;
    next();
  } else {//returns 404 b/c the idea doesnt exist
    res.status(404).send();
  }
});

// Get all ideas
ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

// Get a specific idea
ideasRouter.get('/:ideaId', (req, res, next) => {
//response is the specific idea that was set in the paramters
  res.send(req.idea);
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
  //updates the idea in the db
  //sends the updated idea over in the response
  res.send(updateInstanceInDatabase('ideas',req.body));
})

//add a new idea to the db
ideasRouter.post('/', checkMillionDollarIdea, (req,res,next) => {
  //adds the idea to the db
  //send the newly added idea in a response
  res.status(201).send(addToDatabase('ideas',req.body))
})

//delete a idea from the db
ideasRouter.delete('/:ideaId', (req, res, next) => {
  //deletes the particular idea from the database
  deleteFromDatabasebyId("ideas", req.params.ideaId );
  //sends the response 204
  res.status(204).send();
})


//export the router
module.exports = ideasRouter;
