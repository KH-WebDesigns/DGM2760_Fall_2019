//grabbing text from the three textarea boxes
nounText = document.querySelector('#txtNoun').value;
adjText = document.querySelector('#txtAdj').value;
verbText = document.querySelector('#txtVerb').value;

/* ensuring that each line of text reads as a separate array elemment then turning that into an array */
let nounArray = nounText.replace(/^\s+|\s+$/g, '').split(/\s+/);
let adjArray = adjText.replace(/^\s+|\s+$/g, '').split(/\s+/);
let verbArray = verbText.replace(/^\s+|\s+$/g, '').split(/\s+/);

//setting the place where the story will appear. 

document.querySelector('#theStory').innerHTML = '';


document.querySelector('#tellTheStory').onclick = tellTheStory = () => {
    
    document.querySelector('#theStory').innerHTML = 
    ` <h6> Goodnight Moon </h6><br>
     <p> In the <strong>${adjArray[3]}</strong> green room, there was a <strong> ${nounArray[0]} </strong> and a <strong>${adjArray[0]}</strong> balloon and a picture of the <strong> ${nounArray[1]} </strong> <strong>${verbArray[1]}</strong>ing over the moon. <br><br> And there were three <strong>${adjArray[1]}</strong> bears <strong>${verbArray[2]}</strong>ting on chairs and two <strong>${adjArray[1]}</strong> <strong> ${nounArray[3]}s </strong> and a pair of <strong> ${nounArray[2]}s</strong> and a <strong>${adjArray[1]}</strong> toyhouse and a young mouse and a comb and a brush and a bowl full of mush and a quiet <strong>${adjArray[2]}</strong> lady who was <strong>${verbArray[0]}</strong>ing "hush." <br><br> Gooodnight room, goodnight moon, goodnight  <strong> ${nounArray[1]} </strong> <strong>${verbArray[1]}</strong>ing over the moon, goodnight light and the  <strong>${adjArray[0]}</strong> balloon, goodnight bears, goodnight chairs goodnight <strong> ${nounArray[3]}s </strong> and goodnight <strong> ${nounArray[2]}s</strong>, goodnight clocks and goodnight socks, goodnight <strong>${adjArray[1]}</strong> house and goodnight mouse, goodnight comb and goodnight brush, goodnight nobody goodnight mush and goodnight to the <strong>${adjArray[2]}</strong> lady <strong>${verbArray[0]}</strong>ing "hush," goodnight stars, goodnight air, goodnight noise everywhere. <br><br> In the <strong>${adjArray[3]}</strong> green room there was a <strong> ${nounArray[0]} </strong> and a  <strong>${adjArray[0]}</strong> balloon and a picture of - A  <strong> ${nounArray[1]} </strong> <strong>${verbArray[1]}</strong>ing over the moon.</p>`

}
