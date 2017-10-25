//determines if the users choice is legit or not
//displays error message if the choice is not accurate
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput===`rock`) {
    return userInput;
  }
  else if (userInput===`paper`) {
    return userInput;
  }
  else if (userInput===`scissors`) {
    return userInput;
  }
  else {
    console.log(`${userInput} is not a legit value`);
  }
}

//determines the computer's play based off a random number generator
const getComputerChoice = () => {
  let randomChoice = Math.ceil(Math.random()*3);

  if (randomChoice === 1) {
    return `rock`;
  }
  else if (randomChoice=== 2) {
    return `paper`;
  }
  else {
    return `scissors`;
  }
}

const determineWinner = (computerChoice, userChoice) => {
  if (computerChoice === userChoice) {
    return `tie`;
  }
  else if (computerChoice===`rock` && userChoice===`paper`) {
    return `win`;
  }
  else if (computerChoice===`scissors` && userChoice===`rock`) {
    return `win`;
  }
  else if (computerChoice===`paper` && userChoice===`scissors`) {
    return `win`;
  }
  else {
    return `lose`;
  }

}

const playGame = () => {
  const computerChoice = getComputerChoice();
  //const userChoice = getUserChoice(prompt("Paper, rock, or scissors?"));
  const userChoice = getUserChoice(`rock`);

  console.log(`Computer choice: ${computerChoice}`);
  console.log(`Your choice: ${userChoice}`);

  console.log(`Result of the competition is......`);
  console.log(determineWinner(computerChoice, userChoice));
}
//let input = prompt(`Enter input value`);
playGame();
