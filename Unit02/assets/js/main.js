function onPageResize(){
    let windowSize = `This page is ${window.innerWidth} pixels wide and ${window.innerHeight} pixels high.`
    let offsetStats = `The window is offset by ${window.pageXOffset} pixels on the X axis and ${window.pageYOffset} pixels on the Y axis.`
    let currentUrl = `The URL for this page is ${document.URL}.`
    let lastUpdated = `This page was last updated via Git push on ${document.lastModified}.`
    let docTitle = `The title of this document is ${document.title}.`

    let windowProps = document.querySelector('#windowProps').innerText = `${windowSize} \n ${offsetStats} \n \n ` 
    let docProps = document.querySelector('#docProps').innerText = `${currentUrl} \n ${lastUpdated} \n ${docTitle} \n \n`
}
onPageResize();