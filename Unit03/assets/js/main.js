let pageTitle = document.querySelector('#pageTitle').innerText = `DGM 2760 - Unit 03`;
let secPageTitle = document.querySelector('#secPageTitle').innerText = `High/Low Guessing Game`;
let didTheyGuess = false;
let attempts = 0;
let playerGuess = 0;

const answerNum = Math.floor(Math.random() * 15);



//The user will pick a random number between 0 and 16
function checkGuess() {
   attempts++;
//    console.log(`You have guessed ${attempts} times.`);
    playerGuess = document.querySelector('#yourGuess').nodeValue;
    console.log(`You guessed ${playerGuess}`);


    const feedback = document.querySelector('#feedback');
}

console.log(`The correct number is ${answerNum}`);