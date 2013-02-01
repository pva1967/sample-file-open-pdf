document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
    document.getElementById('btnOpenPDF').onclick = function() {
        var app = new Application();
        app.Run();
    }
}

function Application() {
}

Application.prototype.Run = function() {
    if (device.platform === 'Android') {
        var path = "file://" + this.getWorkingFolder() + "sample.pdf";
        window.plugins.childBrowser.openExternal(path);
    } else {
        var url = window.location.href.replace('index.html', 'sample.pdf');
        window.plugins.childBrowser.showWebPage(url);
    }
}

Application.prototype.getWorkingFolder = function() {
    var path = window.location.href.replace('index.html', '').replace('http://', '');
    return path;
}
