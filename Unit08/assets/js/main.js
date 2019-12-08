const question = {
    stem: "What is the common name for a Ranch-Style House?",
    answer1: 'Rambler',
    answer2: 'Split-Level',
    answer3: 'Tudor',
    correct: 2,
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
document.querySelector('#answer1Label').textContent = question.answer1;

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))

console.log(question.stem);