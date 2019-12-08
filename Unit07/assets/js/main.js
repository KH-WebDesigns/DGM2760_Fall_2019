let message

const pizza = {
    crust:'Original',
    cheese: 'Regular',
    toppings: 'Pepperoni',
    createPizza: () => {
        console.log('buildPizza method has been called')
        message = `Kurt is now baking your pizza on a ${pizza.crust} crust with ${pizza.cheese} cheese and ${pizza.toppings} on top!`
        document.querySelector('#message').textContent = message
    },
    shoppingList: () => {
        console.log('it worked!')
        let flour = 1
        let cheese = 1
        if (pizza.crust === 'thin') flour /= 2
        if (pizza.crust === 'thick') flour *= 2 
        if (pizza.cheese === 'no cheese') cheese = 0
        if (pizza.cheese === 'extra') cheese *= 2 
        
        message = ` You will need to purchase  ${flour} cups of flour, ${cheese}lbs of cheese and 2lbs of ${pizza.toppings}.`
        document.querySelector('#message').textContent += message
    }
}

//CRUST radio buttons
let thinButton = document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#original').addEventListener('click', () => pizza.crust = 'original')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

//CHEESE radio buttons
document.querySelector('#none').addEventListener('click', () => pizza.cheese = 'no cheese')
document.querySelector('#regular').addEventListener('click', () => pizza.cheese = 'regular')
document.querySelector('#extra').addEventListener('click', () => pizza.cheese = 'extra')

//TOPPINGS radio buttons
document.querySelector('#pepperoni').addEventListener('click', () => pizza.toppings = 'pepperoni')
document.querySelector('#veggie').addEventListener('click', () => pizza.toppings = 'veggie')
document.querySelector('#supreme').addEventListener('click', () => pizza.toppings = 'supreme')

//When the 'Create My Pizza' button is pressed, the ingredients of the pizza will be displayed
document.querySelector('#createPizza').addEventListener('click', () => pizza.createPizza());

//When the 'Create Shopping List' button is pressed, the needed ingredients and their amounts will be displayed
document.querySelector('#shoppingList').addEventListener('click', () => pizza.shoppingList());