(function() {
	$("#logout").click(function() {
		$.getJSON(logoutUrl,null,function() {
			location.reload();
		});
	});
	
	$("#submit-login").click(function() {
		var user = $("input[name=username]").val(), pass = $("input[name=password]").val();
		$.post(window.contextPath + "/api/bennu-core/profile/login", {username : user, password: pass}, function(profileAfterLogin) {
			location.reload();
		});
	});
}());