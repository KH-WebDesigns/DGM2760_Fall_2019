const question = {
    stem: "What is the common name for a Ranch-Style House?",
    answer1: 'Rambler',
    answer2: 'Split-Level',
    answer3: 'Tudor',
    answer4: 'Mansion',
    correct: 1,
    display: () => {
        document.querySelector('#questionStem').textContent = question.stem;
        //Displys the question options here
    },
    check: (userInput) => {
        if (userInput === question.correct ) {
            document.querySelector('#userMessage').textContent = `You are correct!`
        } else {
            document.querySelector('#userMessage').textContent = `That is not the correct answer, please try again.`
        }
    }

}
document.querySelector('#questionStem').textContent = question.stem;
document.querySelector('#answer1Label').textContent = question.answer1;
document.querySelector('#answer2Label').textContent = question.answer2;
document.querySelector('#answer3Label').textContent = question.answer3;
document.querySelector('#answer4Label').textContent = question.answer4;

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

console.log(question.stem);