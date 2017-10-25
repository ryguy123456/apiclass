let userName = 'Buki';
let userQuestion = "Will I be sleepy tomorrow?";

//console.log(`${userName} asks ${userQuestion}`);

randomNumber = Math.floor(Math.random()*7);

let eightBall;

switch(randomNumber)
    {
   	case 1:
      console.log("It is certain");
      break;
    case 2:
      console.log("It is decidedly so");
      break;
    case 3:
      console.log("Reply hazy try again");
      break;
    case 4:
      console.log('Cannot predict now');
      break;
    case 5:
      console.log("Don't count on it");
      break;
    case 6:
      console.log("My sources say no");
      break;
    case 7:
      console.log("Outlook not so good");
      break;
    default:
      console.log('Signs point to yes');
      break;
    }
