// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType,arrayIndex,newPresets) => {
  if(isValidRequestType(requestType)===false) {//checks if the request is valid
    return [400,null]; //returns 400 error when request is not valid
  } else if (isValidIndex(arrayIndex)===false){ //checks if index is valid
    return [404,null]; //returns 404 error when index is not valid
  } else if (requestType === "GET"){//for get
    return [200,presets[arrayIndex]];//returns 200 + the array at that index
  } else {//for put
    presets[arrayIndex] = newPresets;//sets the value at the index to the new values
    return [200,presets[arrayIndex]];//returns 200 + the array at that index
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
};

//checks to see if the index is valid or not
const isValidIndex = (arrayIndex) => {
  if(arrayIndex>=0 && arrayIndex < presets.length ) {//checks if the index is 0 to the length of the array
    return true;//returns true if that is the case
  } else {
    return false; //returns false otherwise
  }
};




// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
