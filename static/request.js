function ajaxInsert(){
		$.ajax({
			type : "POST",
			url : "http://localhost:8080/users/add",
			contentType : "application/json",
			success: function(result){
				console.log("insert");
				/*$('#ResultDiv').empty();
				$.each(result, function(i, user){
					$('#ResultDiv').append(user.firstname + " " + user.lastname + "<br>")
				});*/
				$('#ResultDiv').html(result.responseText);
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#ResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});
	}
		function ajaxSearch(){
		$.ajax({
			type : "GET",
			url : "http://localhost:8080/users/usersAll",
			success: function(result){
				$.each(result, function(i, user){
					$('#ResultDiv').append(user.firstname + " " + user.lastname + "<br>")
				});
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#ResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});
	}

		function ajaxDelete(){
		$.ajax({
			type : "DELETE",
			url : "http://localhost:8080/users/:userId/delete",
			contentType : "application/json",
			sucess: function(result){
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#ResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});
	}
		function ajaxUpdate(){
		$.ajax({
			type : "PUT",
			url : "http://localhost:8080/users/:userId/update",
			contentType : "application/json",
			success: function(result){
				$.each(result, function(i, user){
					$('#ResultDiv').append(user.firstname + " " + user.lastname + "<br>")
				});
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#ResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});
	}
