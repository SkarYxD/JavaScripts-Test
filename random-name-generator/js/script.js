function generate(){
	var firstname = ["Marquis", "Samir", "Adrien", "Joyce", "Pierce", "Juliette", "Kelton", "Jacob", "Isiah", "Lindsay", "Kian", "Jordyn", "Jaquan", "Anya", "Wayne", "Khalil"];
	var lastname= ["Mills", "Mercer", "Reeves", "Hines", "Sanford", "Irwin", "Koch", "Hinton", "Estes", "Jackson", "Lowe", "Guerra", "Pineda", "Franco", "Cowan", "Krause"];
	var rand_first = Math.floor(Math.random()*firstname.length); 
	var rand_last = Math.floor(Math.random()*lastname.length); 
	document.getElementById('result').innerHTML = "<h1>My name is:</h1><div class='alert alert-success'><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></div>";
	
}