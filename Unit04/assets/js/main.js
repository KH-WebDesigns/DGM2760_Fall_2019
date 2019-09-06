document.querySelector('#companyName').innerText = `Madame Zim`
document.querySelector('#companySlogan').innerText = `Choose Wisely, Your Fortune`




//TO OBTAIN A RANDOM MONTH

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

let month = getRandomIntInclusive(1, 12)

function getMonth(month){
    let monthName

    switch (month) {
        case 1:
            monthName = `January`
            break;
        case 2:
            monthName = `February`
            break;
        case 3:
            monthName = `March`
            break;
        case 4:
            monthName = `April`
            break;
        case 5:
            monthName = `May`
            break;
        case 6:
            monthName = `June`
            break;
        case 7:
            monthName = `July`
            break;
        case 8:
            monthName = `August`
            break;
        case 9:
            monthName = `September`
            break;
        case 10:
            monthName = `October`
            break;
        case 11:
            monthName = `November`
            break;
        case 12:
            monthName = `December`
            break;                                                   
        default: 
            monthName = `Not a Month`
            break;
    }
    return monthName;
}

const monthName = getMonth(month)
// console.log(monthName);


//TO OBTAIN A RANDOM DATE BETWEEN 1 and 30
let day = getRandomIntInclusive(1, 30)

function getDay(day){
    let dayNum

    switch (day) {
        case 1:
            dayNum = 1
            break;
        case 2:
            dayNum = 2
            break;
        case 3:
            dayNum = 3
            break;
        case 4:
            dayNum = 4
            break;
        case 5:
            dayNum = 5
            break;
        case 6:
            dayNum = 6
            break;
        case 7:
            dayNum = 7
            break;
        case 8:
            dayNum = 8
            break;
        case 9:
            dayNum = 9
            break;
        case 10:
            dayNum = 10
            break;
        case 11:
            dayNum = 11
            break;
        case 12:
            dayNum = 12
            break;
        case 13:
            dayNum = 13
            break;
        case 14:
            dayNum = 14
            break;
        case 15:
            dayNum = 15
            break;
        case 16:
            dayNum = 16
            break;
        case 17:
            dayNum = 17
            break;
        case 18:
            dayNum = 18
            break;
        case 19:
            dayNum = 19
            break;
        case 20:
            dayNum = 20
            break;
        case 21:
            dayNum = 21
            break;
        case 22:
            dayNum = 22
            break;
        case 23:
            dayNum = 23
            break;
        case 24:
            dayNum = 24
            break;
        case 25:
            dayNum = 25
            break;
        case 26:
            dayNum = 26
            break;
        case 27:
            dayNum = 27
            break;
        case 28:
            dayNum = 28
            break;
        case 29:
            dayNum = 29
            break;
        case 30:
            dayNum = 30
            break;
        
        default: 
            dayNum = `Not a date number`
            break;
    }

    return dayNum;

}

const dayNum = getDay(day);
// console.log(dayNum);

//TO OBTAIN ONE OF FIVE FORTUNES
let fortune = getRandomIntInclusive(1, 5)

function getFortune(fortune){
    let message
    
    switch (fortune) {
      
        case 1:
            return 'You will grow a foot taller this year!'
            break;
        case 2: 
            return 'You will have an eventful day this month.'
            break;
        case 3:
            return 'Idk. What do you want from life?'
            break;
        case 4: 
            return 'Wild boars will make you their pet.'
            break;
        case 5:
            return 'You will not drink the kool-aid.'
            break;
        default:
            break;
    }
}

const message = getFortune(fortune);
// console.log(getFortune(fortune));


function giveMyFortune() {
    document.querySelector('#yourFortune').innerText = `On ${monthName} ${dayNum},  ${message}.`
}

giveMyFortune();
