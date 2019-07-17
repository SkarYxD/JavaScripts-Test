function dragOver(e){
	e.preventDefault();
}
	
function drop(e){
	e.preventDefault();
	var data = e.dataTransfer.getData("data");
	console.log(e.target);
	e.target.src = "images/"+data;
	e.target.style = "border:1px SOLID #ccc;";
}

function drag(e){
	e.dataTransfer.setData("data", e.target.id);
}