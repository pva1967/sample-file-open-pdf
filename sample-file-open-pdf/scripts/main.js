document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $("#btnOpenPDF").click(function() {
        var app = new Application();
        app.Run();
    });
}

function Application() {
}

Application.prototype.Run = function() {
    debugger;
    if (device.platform == 'iPad' || device.platform == 'iPhone') {
        var url = window.location.href.replace('index.html', 'sample.pdf');
        window.plugins.childBrowser.showWebPage(url);
    } else if (device.platform == 'Android') {
        var path = "file://" + this.getWorkingFolder() + "sample.pdf";
        window.plugins.childBrowser.openExternal(path);
    }
}

Application.prototype.getWorkingFolder = function() {
    var path = window.location.href.replace('index.html', '').replace('http://', '');
    return path;
}
