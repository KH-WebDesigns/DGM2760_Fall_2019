let message

const pizza = {
    crust:'Original',
    cheese: 'Regular',
    toppings: 'Pepperoni',
    createPizza: function() {
        console.log('buildPizza method has been called')
        message = `Kurt is now baking your pizza on a ${pizza.crust} crust with ${pizza.cheese} cheese and ${pizza.toppings} on top!`
        document.querySelector('#message').textContent = message
    }
}

//CRUST radio buttons
let thinButton = document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#original').addEventListener('click', () => pizza.crust = 'original')
document.querySelector('#glutenFree').addEventListener('click', () => pizza.crust = 'gluten free')

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


