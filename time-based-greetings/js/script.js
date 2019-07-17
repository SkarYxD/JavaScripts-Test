var date = new Date();
var hours = date.getHours();
var greet;

if(hours < 12){
	greet = "<center><img src='images/image1.png' width='500'/></center>";
}else if(hours >= 12 && hours <= 17){
	greet = "<center><img src='images/image2.png' width='500'/></center>";
}else if(hours >= 17 && hours <= 24){
	greet = "<center><img src='images/image3.png' width='500'/></center>";
}

document.getElementById('greeting').innerHTML = greet;