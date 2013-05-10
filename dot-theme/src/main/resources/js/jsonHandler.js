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
	$(hostJson.groups).each(function(i, e) {
		if (e["expression"] === "#managers") {
			hostJson.manager = true;
		}
	});

	var path = location.href.replace(location.href.substring(0, location.href.indexOf(contextPath) + contextPath.length
			+ 1), "");
	
	window.selectedMenu = null;

	var selectMenu = function(parent, child, localPath) {
		var selected = false;
		
		//deselect all childs
		$(child).each(function(i, e) {
			e.selected = false;
		});
		
		//select parent Menu
		if (parent.path === localPath) {
			parent.selected = true;
			selected = parent;
			return false;
		}
		
		//if no parentMenu was selected and has child try to select one of the child.
		//If founds one child selects the parentMenu too.
		if (!selected && child) {
			$(child).each(function(i, e) {
				e.selected = e.path === path;
				if (e.selected) {
					selected = e;
					parent.selected = true;
					return false;
				}
			});
		}

		if (selected) {
			return selected;
		}
		
		//if parent or child are not selected then reset parent child menus
		//to prevent mustache from rendering the child menus of parent menu
		parent.menu = [];
		return false;
	};

	$(hostJson.menu).each(function(i, e) {
		var menu = selectMenu(e, e.menu, path);
		if (menu) {
			window.selectedMenu = menu;
			console.log("set menu has selected:" + menu.path);
		}
	});
	
	console.log(JSON.stringify(hostJson,null, '\t'));
	return hostJson;
}
