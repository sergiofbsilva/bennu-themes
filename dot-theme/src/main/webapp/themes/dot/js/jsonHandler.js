function jsonHandler(hostJson) {
	
	
	
	var messages = {
			username : {pt : "Utilizador", en : "Username"},
			settings : {pt : "Configuração", en : "Settings"},
			logout : {pt : "Sair", en : "Logout"},
			login : {pt : "Entrar", en: "Login"}
		};
	
	function addMessages(json, messages) {
		var locale = json["_lang"];
		json["_i18n"] = function() {
			return function(val) {
				if (messages[val] && messages[val][locale]) {
					return messages[val][locale];
				} else {
					return "_i18n!!" + locale + "!!" + val +"!!";
				}
			}
		}
	}
	
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
	
	addMessages(hostJson, messages);
	
	return hostJson;
}