duplicateMenu = () => {
    //get a list of the anchor elements for the smaller menu
    let topList = document.querySelectorAll('#primaryNavigation li a') //returns a Node List

    //create new list items for end of page
    let newList = document.createElement('ul')
    document.querySelector('#smallNavArea').appendChild(newList);


    topList.forEach((menuItem) => {
        let newListItem = document.createElement('li')
        let newAnchor = document.createElement('a')
        newAnchor.setAttribute('href', menuItem.getAttribute('href'))
        
        newList.appendChild(newListItem)
        newListItem.appendChild(newAnchor)
        
        newAnchor.textContent = menuItem.text;

    })


    
}



duplicateMenu()