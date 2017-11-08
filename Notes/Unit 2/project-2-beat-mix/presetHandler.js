// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType,arrayIndex,presets) => {
  if(isValidRequestType(requestType)===false) {//checks if the request is valid
    return [400,null]; //returns 400 error when request is not valid
  } else if (isValidIndex(index)===false){ //checks if index is valid
    return [404,null]; //returns 404 error when index is not valid
  } else {
    return [200,presets];
  }

};

//checks to see if the preset handler was passed a valid request type
const isValidRequestType = (requestType) => {
  if(requestType === "GET") {//valid requests are get or put, returns true in those cases
    return true;
  } else if (requestType === "PUT") {
    return true;
  } else {
    return false;//returns false if something else
  }

//checks to see if
const isValidIndex = (arrayIndex) => {
  if (index >= 0) {
    return true;
  } else {
    return false;
  }

}

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
