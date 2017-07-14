console.log("hello js");

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var currentColor = "";
var currentReindeer = "";

var hohohoElement = document.getElementById("reindeer");

for(var i = 0; i < reindeer.length; i++) {
    currentColor = colors[i];
    currentReindeer = reindeer[i];
    console.log(currentColor+ " ", currentReindeer);
    var combo = currentColor + " " + currentReindeer;
    console.log("combo is set to: ", combo);
    hohohoElement.innerHTML += "<p>" + combo + "</p>";
}


// Ted's comments: I'm using the reindeer array as my loop counter because there are fewer reindeer than colors.  So, that gives each reindeer a color, without spitting out any empty colors that don't have matching reineer.

// EXERCISE COMPLETE




// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer