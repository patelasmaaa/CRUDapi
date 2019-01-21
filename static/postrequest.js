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
			/*complete : function(user) {
				$("#ResultDiv").html("<p>" +
					"Successful! <br>" +
					"--> " + user.responseText + "</p>");
			},*/
			success: function (response) {
				console.log(response);
				for(var i=0; i<response.length; i++){
					var Html=`<tr><td>`+response[i]._id+`</td><td>`
					+response[i].firstname+"</td><td>"+response[i].lastname;$('#ResultDiv').append(Html);
				}

//`<td><input type="button" value="Update" onclick=""> <button value="`+response[i]._id`" onclick="ajaxDelete(this.value)"> Delete </button> </td></tr>`

			/*$('#ResultDiv').html(response.map(user => {
					return `<td>
						<tr> ${user._id }</tr>
						<tr> ${user.firstname }</tr>
						<tr> ${user.lastname }</tr>
					</td>`}))*/
					/*return `<li data-id="${ user._id }">
					<span>${ user._id }</span>
					<span>${ user.firstname }</span>
					<span>${ user.lastname }</span>
					</li>`;
					}).join(''));*/
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
    	// PREPARE FORM DATA
    	/*var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val(),
    		userId :$("#userId").val()
    	}*/
    	console.log($("#userId").val());
    	//console.log(firstname);
    	$.ajax({
			type : "DELETE",
			contentType : "application/json",
			dataType : 'json',
			//url : "http://localhost:8080/users/",
			url : "http://localhost:8080/users/" + $("#userId").val(),
			//data : JSON.stringify(formData),
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

/*function ajaxDeleteUpdate(){
	var divElement = document.getElementById("deleteUpdate");
			if(divElement.style.display === "block"){
				divElement.style.display === "none";
			}
}*/
