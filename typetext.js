let myText = 'portfolio';

let myArray = myText.split("");

let loopTimer;

function frameLooper() {

if(myArray.length > 0) {

document.getElementById("typetext").innerHTML += myArray.shift();

} else {

clearTimeout(loopTimer);

return false;

}

loopTimer = setTimeout('frameLooper()',450);

}

frameLooper();