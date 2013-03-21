document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
	document.getElementById('btnOpenPDF').onclick = function() {
		var app = new Application();
		app.Run();
	}
}

function Application() {
}

Application.prototype.Run = function() {
	var infoDiv = document.getElementById("infoField");
    
	if (device.platform === 'Android') {
		var path = this.getWorkingFolder().replace('http://', 'file://') + "sample.pdf";

		infoDiv.innerText = path;
		window.plugins.childBrowser.openExternal(path);
	} else {
		var url = window.location.href.replace('index.html', 'sample.pdf');
        
		infoDiv.innerText = url;
		window.plugins.childBrowser.showWebPage(url);
	}
}

Application.prototype.getWorkingFolder = function() {
	var path = window.location.href.replace('index.html', '');
	return path;
}