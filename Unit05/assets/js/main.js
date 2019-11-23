document.querySelector('#headerName').textContent = `The Arborist`
document.querySelector('#headerSlogan').textContent = `Manipulating Arrays With Events`
const RESULTS = document.querySelector('#results');
const ERROR = document.querySelector('#errReport');


//================= Initial Tree List =====================//

const TREES = ['oak', 'Spruce', 'Mahogany', 'Redwood'];

    //Displaying this tree list in it's own list
    const LISTTREES = () => {
        let treeList = '';
        TREES.forEach(tree => {

            // console.log(tree);
            treeList += `${tree} <br>`

        })
        RESULTS.innerHTML = `${treeList} <span>There are ${TREES.length} Trees On This List</span>`;
    }
    
    LISTTREES();




//============== end Initial tree list ======================//

//Add to the front of the array
document.querySelector('#addApple').onclick = () => {
    TREES.unshift('Apple');
    LISTTREES();
}

//Add to the end of the array
document.querySelector('#addSpruce').onclick = () => {
    TREES.push('Spruce');
    LISTTREES();
}

//Get rid of the first tree
document.querySelector('#deleteFirst').onclick = () => {
    if (TREES.length > 0) {
        TREES.shift();
        LISTTREES();
    } else {
        document.querySelector('#errList').innerHTML = `<br> <strong> Sorry, there are no more trees left to remove! <br> Please add another tree before attempting to remove anohther. </strong>`
    }
}

//Get rid of the second tree
document.querySelector('#deleteSecond').onclick = () => {
 if(TREES.length > 1){
    TREES.splice(1, 1);
    LISTTREES();
} else {
    document.querySelector('#errList').innerHTML = `<br> <strong> Sorry, there are no more trees left to remove! <br> Please add another tree before attempting to remove anohther. </strong>`
}
}

//Get rid of the last tree
document.querySelector('#deleteLast').onclick = () => {
    if(TREES.length > 0){
    TREES.pop();
    LISTTREES();
} else {
    document.querySelector('#errList').innerHTML = `<br> <strong> Sorry, there are no more trees left to remove! <br> Please add another tree before attempting to remove anohther. </strong>`
}
}

//Sort Alphabetically
document.querySelector('#alphaSort').onclick = () => {
    TREES.sort();
    LISTTREES();
}


const newLISTTREES = () => {
    let treeList = '';
    newTREES.forEach(tree => {

        // console.log(tree);
        treeList += `${tree} <br>`

    })
    RESULTS.innerHTML = `${treeList} <span>There are ${newTREES.length} Trees On This List</span>`;
}

//Lower Case of Array Items
document.querySelector('#lowercase').onclick = () => {
    newTREES = TREES.map(tree => tree.toLowerCase());
    newLISTTREES();
}


//Show the Third Tree
document.querySelector('#showThird').onclick = () => {


    if(TREES.length < 3) {
        document.querySelector('#errList').innerHTML = `<br> <strong> We're sorry, the array  needs to bave at least three items to show only the third item.</strong>`;
        } 
        else 
        {
        
        newTREES = TREES.slice(2, 3);
        newLISTTREES();
    }   

   
}

//Show the Fourth Tree
document.querySelector('#showFourth').onclick = () => {

    if(TREES.length < 4) {
        
        document.querySelector('#errList').innerHTML = `<br> <strong> Apologies, the array needs more than 4 items to show only the fourth. </strong>`;
    }
    else {
 
        newTREES = TREES.slice(3);
        newLISTTREES();
    }
}