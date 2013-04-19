(function() {
	$(".lang").click(function(e) {
		var tag = $(e.target).text();
		$.post(window.contextPath + "/api/bennu-core/profile/locale/" + tag, null, function(data) {
			location.reload();
		});
	});
})();