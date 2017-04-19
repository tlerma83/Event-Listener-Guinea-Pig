console.log("yo");



var outputTarget = document.getElementById("output-target");
//get the classes that you want to target. this will create an HTML collection which is similiar to an array
var sectionItems = document.getElementsByClassName("article-section");

//this function will take the object information from the event listener that calls it. take that object, then target which item was clicked, and display the text or value from it
function clickEventSections (event) {
    var sectionClicked = event.target.innerHTML;
    outputTarget.innerHTML = `You clicked on the ${sectionClicked}`;
}

//sectionItems.addEventListener("click", clickEventSections);

//create a loop for your sections that all have the same class so each one will have the eventlistener
for (var i = 0; i < sectionItems.length; i++) {
 sectionItems.item(i).addEventListener("click", clickEventSections);
}
//the .item is used on HTML collections to pass in the counter, then pass in the function above

///////////  ***** MouseOver and Out
var h1Title = document.getElementById("page-title");

function mouseOverH1 (event) {
    outputTarget.innerHTML = "You moved your mouse over the header";
}

function mouseOutH1 (event) {
    outputTarget.innerHTML = "You left me! !";
}

h1Title.addEventListener("mouseover", mouseOverH1);
h1Title.addEventListener("mouseout", mouseOutH1);

// ***  anonymous function. make the output html = to the event of the kepup, then target the element, and then it's value
var inputField = document.getElementById("keypress-input");

inputField.addEventListener("keyup", function(event){
    outputTarget.innerHTML = event.target.value;
});


var guinea = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(event){
    guinea.classList.toggle("blue");
});

document.getElementById("make-large").addEventListener("click", function(event){
    guinea.classList.toggle("large");
});

document.getElementById("add-border").addEventListener("click", function(event){
    guinea.classList.toggle("border");
});

document.getElementById("add-rounding").addEventListener("click", function(event){
    guinea.classList.toggle("round-bottoms");
})

var section1 = document.getElementById("section1");

section1.classList.add("bold");

var section5 = document.getElementById("section5");

section5.classList.add("bold", "italicized");










