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
	return hostJson;
}