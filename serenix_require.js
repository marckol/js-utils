var requireJsCompleteExt = true;

if (!window["__SereniX_loadedLibs__"]) {
    window["__SereniX_loadedLibs__"] = [];
}
var requireJs = function() {
    var libs = [];
	
    function flatLibs(args, result) {
        var count = args.length;
	    for (var k = 0; k < count; k++) {
		    var a = args[k];
			if (Array.isArray(a)) {
				flatLibs(a, result);
			} else if (typeof a === "string"){
			    result[result.length]  = a;
			} else if (typeof a === "object"){
			    if (typeof a.getLibraries === "function") {
				    var libs = a.getLibrairies();
					if (libs) {
						flatLibs(libs, result);
					}
				} else {
					var libs = a.libs||a.librairies||a.lib||a.librairy||a.includes||a.include||a["import"]||a.imports||"";
					if (Array.isArray(libs)) {
						flatLibs(libs, result);
					} else if (typeof libs === "object") {
					    var lib = libs.lib||libs.library;
						if (typeof lib === "string" && lib) {
						    result[result.length]  = lib;
						}
					}
				}
			}
		}
	}
	
	function getMimeType(type) {
	    if (type === "string") {
		    if (type.indexOf("/") >= 0) {
			    return type;
			}
			switch(type.toLowerCase()) {
			    case "js":
				case "javascript":
				case "jscript":
				    return "text/javascript";
			    case "css":
				case "style":
				    return "css/javascript";
			}
		} else if (typeof type === "object") {
		}
		return "text/javascript";
	}
	
    flatLibs(arguments, libs);
	
	var head = document.getElementsByTagName("head")[0];
	if (!window["__SereniX_loadedLibs__"]) {
	    window["__SereniX_loadedLibs__"] = [];
		var elts = head.children,
		    e,
		    n = elts.length,
			tag,
			k = 0;
		for (var i = 0; i < n; i++) {
		    e = elts[i];
		    if((e.nodeName||e.tagName).toLowerCase().equals("script")) {
				window["__SereniX_loadedLibs__"][k++] = e.src;
			}
		}
	}
	if (libs.length > 0) {
		var lib, scr, force;
		var loaded = [], 
		    n = libs.length;
		if (typeof libs[0] === "boolean") {
		    force = libs[0];
			n--;
			libs.splice(n, 1);
		}
		for (var i = 0; i < n; i++) {
			lib = libs[i];
			if (window["__SereniX_loadedLibs__"].indexOf(lib) < 0 || force) {
				if (typeof lib === "object") {
					scr = document.createElement("script");
					scr.loaded = loaded;
					scr.lib = lib;
					scr.libs = libs;
					$addEvt(scr, "load", function(ev) {		    
						var target = ev.target||ev.srcElement,
							loaded = target.loaded,
							lib = scr.lib,
							onClick = lib.onClick||lib.onclick||lib.click||lib.Click;
						if (typeof onClick === "function") {
						    onClick(ev, lib);
						}
						loaded[loaded.length] = target.lib;
					});
					head.appendChild(scr);
					scr.setAttribute("type", getMimeType(lib.type));
					scr.setAttribute("src", lib.src||lib.path||lib.url||lib.uri||"");
				} else if (typeof lib === "string") {
				    scr = document.createElement("script");
					scr.loaded = loaded;
					scr.lib = lib;
					scr.libs = libs;
					$addEvt(scr, "load", function(ev) {		    
						var target = ev.target||ev.srcElement,
							loaded = target.loaded,
							lib = scr.lib,
							onClick = lib.onClick||lib.onclick||lib.click||lib.Click;
						if (typeof onClick === "function") {
						    onClick(ev, lib);
						}
						loaded[loaded.length] = target.lib;
					});
					head.appendChild(scr);
					scr.setAttribute("type", "text/javascript");
					scr.setAttribute("src", lib);
				} else {
					loaded[loaded.length] = lib;
				}
			}
		}
		for (;;) {
			if (loaded.length === libs.length) {
				break;
			}
		}
	}
};

if (!window["$addEvt"]) {
    /**
	 * 
	 * @param elt {HTMLElement}    The element on which attach the event.
	 * @param ev {String}          The event name/type
	 * @param callback {Function}  The function when the event occurs.
	 */
    window["$addEvt"] = function(elt, ev, callback) {
	    ev = ev.toLowerCase();
	    if (elt.addEventListener) {                   // For all major browsers, except IE 8 and earlier
			elt.addEventListener(ev.startsWith("on") ? ev.substring(2) : ev, callback);
		} else if (elt.attachEvent) {                  // For IE 8 and earlier versions
			elt.attachEvent(ev.startsWith("on") ? ev : "on" + ev, callback);
		}
	};
}

var $require = requireJs;

var $reqJs = requireJs;

if (!window["SereniX"]) {
    window["SereniX"] = {};
}

SereniX.require = requireJs;