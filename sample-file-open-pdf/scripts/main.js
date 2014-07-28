 document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
	document.getElementById('btnOpenPDF').onclick = function(){
		var app = new Application();
		app.run();
	}
}

function Application() {
}

Application.prototype ={
	run : function(){
		var path,
			windowTarget,
			infoDiv = document.getElementById("infoField");

		if (window.navigator.simulator === true) {
			alert("Not Supported in Simulator.");
		} else {
			windowTarget = device.platform.toLowerCase() === "ios" ? "_blank" : "_system";
			path = infoDiv.innerText = this.getFilePath("sample.pdf", windowTarget);
			window.open(path, windowTarget, "location=yes,hidden=no");
		}
	},
	getFilePath: function(filePath, windowTarget){
		return this.getWorkingFolder().replace("http://", "file://") + filePath;
	},
	getWorkingFolder : function() {
		var indexUrl = window.location.href;
		return indexUrl.substring(0, indexUrl.indexOf("index.html"));
	}
}
