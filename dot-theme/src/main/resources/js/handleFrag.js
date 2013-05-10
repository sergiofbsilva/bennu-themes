(function() {
window.onhashchange = function() {
			var path = location.href.replace(location.href.substring(0, location.href.indexOf(contextPath) + contextPath.length + 1), "");
			$("#subnav li a").each(function(i,a){
					if(a.href.indexOf(path) != -1) {
						$(a).parent().addClass("active");
					}else {
						$(a).parent().removeClass("active");
					}
				});
	};
})();	