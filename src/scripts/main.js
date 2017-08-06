var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

function getGreeting(){
	return "hello";
}

function init(){
	// try server connection
	fetch("https://icepeek.herokuapp.com/test", {mode: 'cors'})
	.then(r=>r.text())
	.then(text=>alert(text))

	document.querySelector("#pitureSelectBtn").addEventListener("click", ()=>{
		if(window.cordova) navigator.camera.getPicture(onSelectPicture, (err)=>console.log(err));
		else console.log("looks like you're not running in cordova. cant select picture")
	})
}

function onSelectPicture(url){
	// set received image as background
	console.log(url)
	document.body.style.backgroundImage=`url(${url})`
}

if (typeof window !== 'undefined'){
	if(window.cordova) document.addEventListener("deviceready", init, false);
	else init()
}


module.exports.getGreeting = getGreeting;