// Creation of all the Drum Arrays with all false values
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

//toggles the value for a particular drum array to the opposite of what it currently is
const toggleDrum = (drumType,drumPosition) => {

  if(drumPosition<16 && drumPosition>=0) { //checks that the drum position is legit
    switch (drumType) { //cycles thru all the drum types
      case 'kicks':
        kicks[drumPosition] = !kicks[drumPosition]; //flips the value in the drum position to the opposite
        break;
      case 'snares':
        snares[drumPosition] = !snares[drumPosition];
        break;
      case 'hiHats':
        hiHats[drumPosition] = !hiHats[drumPosition];
        break;
      case 'rideCymbals':
        rideCymbals[drumPosition] = !rideCymbals[drumPosition];
        break;
      default:
        console.log("Not a real drum type bruh"); //prints when the drum type is not real
        break;
    }
  } else {
    console.log("You submitted a drum position that is not between 0 and 15");//prints when the drum posiion is off the charts
  }

}

//clears all the values in the drum array to be false
const clear = (drumType) => {
  switch (drumType) { //cycles thru all the drum types
    case 'kicks':
      kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];//sets all the values to be false
      break;
    case 'snares':
      snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
      break;
    case 'hiHats':
      hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
      break;
    case 'rideCymbals':
      rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
      break;
    default:
      console.log("Not a real drum type bruh"); //prints when the drum type is not real
      break;
  }
}

//flips all the values in a particulary drum array to be opposite
const invert = (drumType) => {
  switch (drumType) { //cycles thru all the drum types
    case 'kicks':
      for (drumPosition=0; drumPosition<16;drumPosition++) {//for loop that cycles thru all the positions of the drum array
        kicks[drumPosition]=!kicks[drumPosition];
      }
      break;
    case 'snares':
      for (drumPosition=0; drumPosition<16;drumPosition++) {//for loop that cycles thru all the positions of the drum array
        snares[drumPosition]=!snares[drumPosition];
      }
      break;
    case 'hiHats':
      for (drumPosition=0; drumPosition<16;drumPosition++) {//for loop that cycles thru all the positions of the drum array
        hiHats[drumPosition]=!hiHats[drumPosition];
      }
      break;
    case 'rideCymbals':
      for (drumPosition=0; drumPosition<16;drumPosition++) {//for loop that cycles thru all the positions of the drum array
        rideCymbals[drumPosition]=!rideCymbals[drumPosition];
      }
      break;
    default:
      console.log("Not a real drum type bruh"); //prints when the drum type is not real
      break;
  }



}
