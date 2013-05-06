function jsonHandler(hostJson) {
	if (hostJson.name) { 
		hostJson.logged = true;
	} else {
		hostJson.logged = false;
	}
	
	$(hostJson.locales).each(function(i, e) {
		if (e.tag === hostJson.locale.tag) {
			e.selected = true;
		} else {
			e.selected = false;
		}
	});
	
	hostJson.manager = false;
	$(hostJson.groups).each(function(i,e){
		if(e["expression"] === "#managers") {
			hostJson.manager = true;
		}
	});
	
	var path = location.href.replace(location.href.substring(0, location.href.indexOf(contextPath) + contextPath.length + 1), "");
	var menus = new Array();
	$(a.menu).each(function(i,menu){
		menus.push(menu);
		console.log(menu.path);
		if(menu.menu){
			$(menu.menu).each(function(i,submenu){
				menus.push(submenu);
				console.log(submenu.path);
				submenu.parent = menu;
			});
			menus.push(menu.menu);
			console.log(menu.menu.path);
		}
	});
		
	return hostJson;
}