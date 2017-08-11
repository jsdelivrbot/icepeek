// Adding eventlisteners to tablinks

document.getElementById("profile_tablink").addEventListener("click",function(){openTab(event,'profile_tabcontent')});
document.getElementById("location_tablink").addEventListener("click",function(){openTab(event,'location_tabcontent')});
document.getElementById("chat_tablink").addEventListener("click",function(){openTab(event,'chat_tabcontent')});

function openTab(evt,tabcontainer){


	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabcontainer).style.display = "block";
	evt.currentTarget.className += " active_tab";
}

// Get the element with id="profile_tabcontent" and click on it to be the Default element displayed
document.getElementById("location_tablink").click();