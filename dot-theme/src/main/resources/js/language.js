(function() {
	$(".lang").click(function(e) {
		var tag = $(e.target).text();
		BennuPortal.changeLanguage(tag, function() {
			location.reload();
		});
	});
})();