let userName;
function askUserName() {
  userName = prompt("What's your name?");
  console.log("Greetings, " + userName);
}

let userAge;
function askUserAge() {
  userAge = prompt("What's your age?");
  console.log("Nice to know, " + userName + ". By the way, you're " + userAge + " years old!");
}

let favoriteColor;
function askFavoriteColor() {
  favoriteColor = prompt("What is your favorite color?");
  console.log("I see, " + userName + " likes " + favoriteColor + ".");
}

let learningSubject;
function askLearningSubject() {
  learningSubject = prompt("What are you learning?");
  console.log("That's interesting, " + userName + " is learning about " + learningSubject + ".");
}

function showResponseMessage() {
  let message = "Hello, " + userName + ". You're " + userAge + " years old and your favorite color is " + favoriteColor + ". Currently, you are learning " + learningSubject + ".";
  alert(message);
}