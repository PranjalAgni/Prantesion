console.log('Hii it Loaded wow....');

let filename = "sunny.jpg";
let myName = "Pranjal ";

let imgs = document.getElementsByTagName('img');
let text1 = document.getElementsByTagName('h1');
let text2 = document.getElementsByTagName('h2');
let para = document.getElementsByTagName('p');

for (imgElt of imgs) {
    let url = chrome.extension.getURL(filename);
    imgElt.src = url;
    console.log(imgElt.src);
}

for (textElt of para) {
    let orignal = textElt.textContent;
    var len = orignal.length;
    let data = chrome.extension.getURL(myName);
    for (i = 0; i<len-1; i++) {
        data = data + myName;
    }

    textElt.textContent = data;

}