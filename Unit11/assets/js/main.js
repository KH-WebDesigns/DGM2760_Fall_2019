async function getHotelData() {
    try {
        const response = await fetch('./assets/hotel.json')
        return await response.json() //returns the JSON ojbect hotel.json[hotel]

    } catch (error) {
        // console.error(error);
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

//attach to click handlers on the anchor tags
// document.querySelectorAll('a')
let hotelList = document.querySelectorAll('a')
hotelList.forEach(hotel => {
    
    let hotelAnchor = hotel.addEventListener('click', hotelInfo)
    
});






function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    console.log(hotelChoice)
}