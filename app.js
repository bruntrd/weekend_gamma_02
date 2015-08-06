
function callback(results){
	console.log(results);

	var $elUser = $(".username").children().last();
	var $elImage = $(".avatar").children().last();
	var $elUrl = $(".url").children().last();
	var $elRepos = $(".repos").children().last();
	$elUser.append('<p>'+results.login+'</p>');
	$elImage.append('<p><img src='+results.avatar_url+'width=100px height=100px></p>');
	$elUrl.append('<p><a href='+results.html_url+'>Git Page</a></div>');
	$elRepos.append('<p>'+results.public_repos+'</p>');

	// $(".username").append("<div class='newUser col-md 3 col-sm-3'>"+results.login+"</div>");
	// $(".avatar").append("<div class='newImage col-md-3 col-sm-3'><img src="+results.avatar_url+" width=150px height=150px></div>");
	// $(".url").append("<div class='newUrl col-md 3 col-sm-3'><a href="+results.html_url+">Git Page</a></div>");
	// $(".repos").append("<div class='newRepo col-md 3 col-sm-3'>"+results.public_repos+"</div>");
}


$(document).ready(function(){
	

	$(".searchButton").on('click',function(){
		event.preventDefault();
		var $thurgood = $("#entryForm :input").val();
		console.log($thurgood);
		var $user=encodeURI($thurgood);
		getUser($user);

	});
});

function getUser(billybob){
	$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    url: 'https://api.github.com/users/'+billybob+'?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(billybob) {
	        callback(billybob);
	    },
	    error: function(billybob, errorType, errorMessage){
            alert("We couldn't find that user");
        	}
	});
}

