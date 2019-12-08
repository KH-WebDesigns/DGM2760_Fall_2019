duplicateMenu = () => {
    //get a list of the anchor elements for the smaller menu
    let topList = document.querySelectorAll('#primaryNavigation li a') //returns a Node List

    //create new list items for end of page
    let newList = document.createElement('ul')
    topList.forEach((menuItem) => {
        let newListItem = document.createElement('li')
        let newAnchor = document.createElement('a')
        newAnchor.setAttribute('href', menuItem.getAttribute('href'))

        document.querySelector('#smallNavArea').appendChild(newList)
        document.querySelector(newList).appendChild(newListItem)
        document.querySelector(newListItem).appendChild(newAnchor)
        
       
    })
    console.log(newAnchor)

    // document.querySelector
}


duplicateMenu();