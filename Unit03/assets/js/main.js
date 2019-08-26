let pageTitle = document.getElementById('pageTitle');
let secPageTitle = document.getElementById('secPageTitle');

function randNum(lowNum, highNum) {
    return Math.floor(Math.random() * (highNum - lowNum) + lowNum);
}

pageTitle.innerHTML = "DGM 2760 - Unit 03";
secPageTitle.innerHTML = "High/Low Guessing Game"; 


/* Creating using this formula/concept - hence the 16 instead of 15
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values */
// console.log(randNum(1, 16)); 


//=================== 3 - Part 'If' Statement for Ribbons ====================//

