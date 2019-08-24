let companyName = document.getElementById('companyName');
let companySlogan = document.getElementById('companySlogan');
let dateTime = Date();
let displayDate = document.getElementById('displayDate');
let welcomeMsg = document.getElementById('welcomeMsg');
let entryName = window.prompt("Please enter your name!");


companyName.innerHTML = "Joe's Bed and Breakfast";
companySlogan.innerHTML = "Keeping You Warm and Fed";
displayDate.innerHTML = dateTime;
welcomeMsg.innerHTML = "Welcome " + entryName + ", to Joe's Bed and Breakfast!";