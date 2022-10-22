//This game accepts user inputs
//ask user for username
const user = prompt("Kindly enter your name");
//display the name and welcome user
console.log(`Welcome ${user}`);

//declare vuseful variables
let points = 0;
let currentLevel = 1;
let maxLevel = 10;
do {
  console.log(`You are on Level ${currentLevel}`);
  // console.log(`Enter a number between ${currentLevel} and ${maxLevel}`);
  let randomGuess = Math.floor(Math.random() * currentLevel) + 1;
  let userGuess = parseInt(
    prompt(`Enter a number between 1 and ${currentLevel}`)
  );
  if (userGuess == randomGuess) {
    console.log(`Your guess ${userGuess}, is correct!`)
    currentLevel++;
  } else {
    userGuess = parseInt(
      prompt(`You guessed wrong!\nEnter a number between 1 and ${currentLevel}`)
    );
  }

} while (currentLevel <= maxLevel);
