const checkMillionDollarIdea = (req, res, next) => {
  //sets the numWeeks and weekly Revenue from request
  const numWeeks = req.body.numWeeks;
  const weeklyRevenue = req.body.weeklyRevenue;
  //checks if the weeks and revenue are defined or not
  if(!numWeeks && !weeklyRevenue ) {
    res.status(400).send();
  }
  //checks if the weeks and revenue are numbers or not
  else if (!Number.isInteger(numWeeks) || !Number.isInteger(weeklyRevenue)) {
    res.status(400).send();
  }
  //checks if the weeks and revenue are worth over a mill or not
  else if((numWeeks * weeklyRevenue) <1000000) {
    res.status(400).send();
  }
  //successfully passed the check and moves thru the "middleware"
  else {
    next();
  }
};



// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
