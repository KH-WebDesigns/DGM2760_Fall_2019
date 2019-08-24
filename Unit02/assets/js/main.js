let windowWidth = window.innerWidth;
let windowHeighth = window.innerHeight;
let windowSize = document.getElementById('windowSize');
let docTitle = document.getElementById('docTitle');
let currentUrl = document.getElementById('currentUrl');
let lastUpdated = document.getElementById('lastUpdated');
let xOffset = window.pageXOffset;
let yOffset = window.pageYOffset;
let offsetStats = document.getElementById('offsetStats');

windowSize.innerHTML = "This page is " + windowWidth + " pixels wide and " + windowHeighth + " pixels high."; 
offsetStats.innerHTML = "The window is offset by " + xOffset + " pixels on the X axis and " + yOffset + " pixels on the Y axis."
currentUrl.innerHTML = "The url for this page is " + document.URL;
docTitle.innerHTML = "The title of this document is " + document.title;
lastUpdated.innerHTML = "This page was last updated:  " + document.lastModified;