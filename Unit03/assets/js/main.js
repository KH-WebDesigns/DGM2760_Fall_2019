let pageTitle = document.querySelector('#pageTitle').innerText = `DGM 2760 - Unit 03`;
let secPageTitle = document.querySelector('#secPageTitle').innerText = `High/Low Guessing Game`;
let didTheyGuess = false;
let attempts = 0;
let playerGuess = 0;

const answerNum = Math.floor(Math.random() * 15);



//The user will pick a random number between 0 and 16
function checkGuess() {
   attempts++;
   playerGuess = document.querySelector('#yourGuess').value;
   console.log(`Your guess is ${playerGuess} and you have guessed ${attempts} times.`);
   const feedback = document.querySelector('#feedback');


   if (playerGuess == answerNum) {
      console.log(`You are correct!`)
      feedback.innerText = `You win! The answer was ${answerNum}!`
      yourAward();
   } else if(playerGuess > answerNum && playerGuess < 16) {
      feedback.innerText= `Your guess is too high, please try again.`
   } else if(playerGuess < answerNum && playerGuess > 0) {
      feedback.innerText = `Your guess is too low, please try again.`
   } else {
      feedback.innerText = `That number was not between 1 and 15, please try again.`
      attempts --;
   }

   document.querySelector('#attempts').innerText = `Attempts: ${attempts}`;

}

function yourAward(){
   console.log(`Congratulations!`);

   let imagePath = '#';

   switch(attempts){
      case 1:
      case 2:
      case 3: 
         imagePath = 'assets/images/blueRibbon.png'
         break
      case 4:
      case 5:
      case 6: 
         imagePath = 'assets/images/redRibbon.png'
         break
      default:
         imagePath = 'assets/images/yellowRibbon.png'

   }

   const yourRibbon = document.createElement('img'); //We'll use this to generate the ribbons as an image.
   const ribbon = document.querySelector('#ribbon');// Selects the element in which the ribbon will generate.
   yourRibbon.setAttribute('src', imagePath);
   
   if(!ribbon.hasChildNodes()){
      ribbon.appendChild(yourRibbon);
   }


}


console.log(`The correct number is ${answerNum}`);