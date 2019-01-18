$( document ).ready(function() {

	// GET REQUEST
	$("#form").submit(function(event){
		event.preventDefault();
		ajaxGet();
	});

	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "http://localhost:8080/users/add",
			success: function(result){
				$('#getResultDiv ul').empty();
				$.each(result, function(i, user){
					$('#getResultDiv .list-group').append(user.firstname + " " + user.lastname + "<br>")
				});
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});
	}
})
