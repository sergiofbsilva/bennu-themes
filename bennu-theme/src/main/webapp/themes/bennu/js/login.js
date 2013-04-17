(function() {
//	$.getJSON("api/bennu-core/settings", function(settings) {
//		$.getJSON("api/bennu-core/profile", function(profile) {
//			
//			function setLogin(profile) {
//				var logoutUrl = null;
//				if (settings.casEnabled) {
//					logoutUrl = settings.logoutUrl;
//				} else {
//					logoutUrl = "api/bennu-core/profile/logout";
//				}
//				$(".login").html("<span>" + profile.name + "<button class='btn' id='logout'>Logout</button></span>");
//				
//				$("#logout").click(function() {
//					$.getJSON(logoutUrl,null,function() {
//						location.reload();
//					});
//				});
//			}
//			
//			if(profile.name) {
//				setLogin(profile);
//			}else {
//				if(!settings.casEnabled) {
//						$(".login").append("<input type='text' name='username' placeholder='Username'/><input type='password' name='password' placeholder='Password'><button id='submit-form' class='btn'>Login</button>");
//						$("#submit-form").click(function() {
//							var user = $("input[name=username]").val(), pass = $("input[name=password]").val();
//							$.post("api/bennu-core/profile/login", {username : user, password: pass}, function(profileAfterLogin) {
//								setLogin(profileAfterLogin);
//							});
//						});
//				}else {
//						$(".login").html("<a href='" + settings.loginUrl + "'>Login</a>");
//				}
//			}
//		});
//	});
	
	
	$("#logout").click(function() {
		$.getJSON(logoutUrl,null,function() {
			location.reload();
		});
	});
	
	$("#submit-form").click(function() {
		var user = $("input[name=username]").val(), pass = $("input[name=password]").val();
		$.post("api/bennu-core/profile/login", {username : user, password: pass}, function(profileAfterLogin) {
			location.reload();
		});
	});
	
}());