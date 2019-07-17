var imageAddr = "http://jkdev.ga/index-html.png"; 
var downloadSize = 4226; //bytes

function showMessage(msg) {
 
    var result = document.getElementById("result");
    if (result) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        result.innerHTML = actualHTML;
    }
}

function startSpeedDetection() {
    showMessage("Please wait identifying internet speed");
    window.setTimeout(getConnectionSpeed, 3000);
};    


function speedTest(){
	startSpeedDetection();
}



function getConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

    download.onerror = function (err, msg) {
        showMessage("Error: Failed to get internet connection");
    }

    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        showMessage([
            "<h4>Your internet connection speed is:</h4>",
            "<label class='text-primary'>"+speedBps+"</label> bps", 
            "<label class='text-primary'>"+speedKbps+"</label> kbps", 
            "<label class='text-primary'>"+speedMbps+"</label> Mbps"
        ]);
    }
}