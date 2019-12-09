async function getHotelData(){
    try {
        const response = await fetch('./assets/hotel.json')
        return await response.json() //Returns the json object itself
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

let hotelList = document.querySelectorAll('a');
hotelList.forEach(hotel => {
    
    hotel.addEventListener('click', hotelInfo)
    
});


function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    console.log(hotelChoice)
document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
document.querySelector('#pool').textContent = `${hotelChoice.pool}`
document.querySelector('#picture').src = `./assets/images/${hotelChoice.picture}`
}