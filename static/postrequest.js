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
function ajaxDelete(){
			/*let divElement = document.getElementById("divId");
			if(divElement.style.display === "none"){
				divElement.style.display == "";
			}*/
    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val(),
    		userId :$("#userId").val()
    	}
    	console.log($("#userId").val());
    	//console.log(firstname);
    	$.ajax({
			type : "DELETE",
			contentType : "application/json",
			url : "http://localhost:8080/users/" + $("#userId").val(),
			dataType : 'json',
			data : JSON.stringify(formData),
			success : function(user) {
				$("#ResultDiv").html("<p>" +
					"Deleted! <br> </p>");
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
*/  }

function ajaxUpdate(){
			/*let divElement = document.getElementById("divId");
			if(divElement.style.display === "none"){
				divElement.style.display == "";
			}*/
    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val(),
    		userId :$("#userId").val()
    	}
    	console.log($("#userId").val());
    	console.log($("#firstname").val());
    	console.log($("#lastname").val());
    	$.ajax({
			type : "PUT",
			contentType : "application/json",
			url : "http://localhost:8080/users/" + $("#userId").val(),
			dataType : 'json',
			data : JSON.stringify(formData),
			success : function(user) {
				$("#ResultDiv").html("<p>" +
					"Updated! <br> </p>");
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
