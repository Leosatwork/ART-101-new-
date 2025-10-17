
let count = 0;

let colors = ["Orchid", "Coral", "HotPink", "Plum"];


$("#needy-button") .click(function(){
 
    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count]);

$("body").css("background-color", colors[count]);

count = count + 1

})
   

//when it is clicked 
//add one to the total number

//show the total numvber

//on our 

//show "clicked total number times"

//a top limit