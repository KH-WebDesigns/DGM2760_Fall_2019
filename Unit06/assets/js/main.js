//grabbing text from the three textarea boxes
nounText = document.querySelector('#txtNoun').value;
adjText = document.querySelector('#txtAdj').value;
verbText = document.querySelector('#txtVerb').value;

/* ensuring that each line of text reads as a separate array elemment then turning that into an array */
let nounArray = nounText.replace(/^\s+|\s+$/g, '').split(/\s+/);
let adjArray = adjText.replace(/^\s+|\s+$/g, '').split(/\s+/);
let verbArray = verbText.replace(/^\s+|\s+$/g, '').split(/\s+/);

//console.logging to prove it worked! (Arrays should be showing)
console.log(nounArray);
console.log(adjArray);
console.log(verbArray);


