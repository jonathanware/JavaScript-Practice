//This is the function that changes the paragraph

function myFunction () {
    document.getElementById('demo').innerHTML = "Paragraph Changed";
}

//defining variables
var x = 5;
var y = 6;
var z = x + y;

//Injecting the math into the html
function mathFunction () {
    document.getElementById('math').innerHTML = z;
}