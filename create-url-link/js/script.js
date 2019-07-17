$(document).ready(function(){
	$('#create').on('click', function(){
		var name = $('#name').val();
		var url = $('#url').val();
		
		if(name == "" || url == ""){
			alert("Please enter something first");
		}else{
			$('#result').append("<a href='"+url+"' target='_blank'>"+name+"</a><br />");
			$('#name').val('');
			$('#url').val('');
		}
	});
});