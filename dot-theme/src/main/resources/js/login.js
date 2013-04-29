(function() {
	$("#logout").click(function() {
		BennuPortal.logout(function() {
			location.reload();
		});
	});
	
	$("#submit-login").click(function() {
		var user = $("input[name=username]").val(), pass = $("input[name=password]").val();
		BennuPortal.login(user, pass, function() {
			location.reload();
		});
	});
}());