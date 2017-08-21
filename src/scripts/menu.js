let monmodule = require("./monmodule")
console.log(monmodule());

// Add eventlisteners to tablinks
document.getElementById("profile_tablink").addEventListener("click",evt=>openTab('profile'));
document.getElementById("location_tablink").addEventListener("click",evt=>openTab('location'));
document.getElementById("chat_tablink").addEventListener("click",evt=>openTab('chat'));

// keep a reference to these objects:, as they will be
// frequently needed (every time the user selects a tab)
let tabcontents = document.getElementsByClassName("tabcontent");
let tablinks = document.getElementsByClassName("tablink");

function openTab(name){
	// hide all "tabcontent" elements
	for (i = 0; i < tabcontents.length; i++) tabcontents[i].classList.remove("open");

	// De-activate all tablinks
	for (i = 0; i < tablinks.length; i++) tablinks[i].classList.remove("active");

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(name+"_tablink").classList.add("active");
	document.getElementById(name+"_tabcontent").classList.add("open");
}

// open "location" tab by default
openTab("location")