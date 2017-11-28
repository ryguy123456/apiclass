//define the s router
const meetingsRouter = require('express').Router();
//methods to import into the file
const { getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId, deleteAllFromDatabase, createMeeting } = require('./db');

//set the id parameter
meetingsRouter.param('meetingId', (req, res, next, id) => {
  //Looks for the meeting per the ID passed
  const meeting = getFromDatabaseById('meetings', id);
  if (meeting) {
    //sets that meeting in the request if it exists
    req.meeting = meeting;
    next();
  } else {//returns 404 b/c the meeting doesnt exist
    res.status(404).send();
  }
});

// Get all meetings
meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

//add a new meeting to the db
meetingsRouter.post('/', (req,res,next) => {
  //adds the meeting to the db
  //send the newly added meeting in a response
  res.status(201).send(addToDatabase('meetings',createMeeting()));
})

//delete meetings from the db
meetingsRouter.delete('/', (req, res, next) => {
  //deletes the  meetings from the database
  deleteAllFromDatabase("meetings");
  //sends the response 204
  res.status(204).send();
})


//export the router
module.exports = meetingsRouter;
