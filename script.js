//prompt user to input name
var userName = prompt("What is your name?");

// checks to see if there is a user name. If so greet user with hello + userName else just Hello
if (userName) {
  console.log("Hello " + userName);
} else {
  console.log("Hello");
}

// userQuestion prompt
var userQuestion = prompt("Please ask a question.");

// testing - console.log(userQuestion);

//generate random number between 0-7
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "Better not tell you now.";
    break;
  case 1:
    eightBall = "Concentrate and ask again.";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Dont count on it";
    break;
  case 5:
    eightBall = "My reply is no.";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log("The eight ball answer: " + eightBall);
