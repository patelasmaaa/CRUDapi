		function ajaxInsert(){

    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}

    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "http://localhost:8080/users",
			dataType : 'json',
			data : JSON.stringify(formData),
			success : function(user) {
				$("#ResultDiv").html("<p>" +
					"Post Successfully! <br>" +
					"--> " + user.firstname + " " + user.lastname + "</p>");
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    /*function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    }
*/
    }
function ajaxSearch(){

    	/*var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}*/

    	$.ajax({
			type : "GET",
			contentType : "application/json",
			url : "http://localhost:8080/users/",
			dataType : 'json',
			complete : function(user) {
				$("#ResultDiv").html("<p>" +
					"Successful! <br>" +
					"--> " + user.responseText + "</p>");
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    /*function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    }
*/
    }
