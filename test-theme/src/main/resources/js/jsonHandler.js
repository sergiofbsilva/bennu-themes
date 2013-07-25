function jsonHandler(hostJson) {
	
	if (hostJson.name) {
		hostJson.logged = true;
	} else {
		hostJson.logged = false;
	}

	$(hostJson.locales).each(function() {
		if (this.tag === hostJson.locale.tag) {
			this.selected = true;
		} else {
			this.selected = false;
		}
	});

	hostJson.manager = false;
	$(hostJson.groups).each(function() {
		if (this["expression"] === "#managers") {
			hostJson.manager = true;
		}
	});

	var path = location.href.replace(location.href.substring(0, location.href.indexOf(contextPath) + contextPath.length
			+ 1), "");
	
	var selectedMenu = false;
	
	var resetMenu = function() {
		var parent = this;
		var child = parent.menu;
		//deselect all childs
		$(child).each(function() {
			this.selected = false;
			this.parentId = parent.id;
			this.parent = parent;
		});
	};
	
	var tryToSelectParentMenu = function() {
		
		if (this.path === path) {
			this.selected = true;
			selectedMenu = this;
			return false;
		}
		
	};
	
	var tryToSelectChildMenu = function() {
		var parent = this;
		var child = parent.menu;
		
		//if no parentMenu was selected and has child try to select one of the childs.
		//If founds one child selects the parentMenu too.
			$(child).each(function() {
				this.selected = this.path === path;
				if (this.selected) {
					selectedMenu = this;
					this.selected = true;
					parent.selected = true;
					return false;
				}
			});
	};
	
	$(hostJson.menu).each(resetMenu);
	
	$(hostJson.menu).each(tryToSelectParentMenu);
	
	if (!selectedMenu) {
		$(hostJson.menu).each(tryToSelectChildMenu);
	}
	
	return hostJson;
}