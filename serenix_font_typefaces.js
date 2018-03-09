/**
 * <h3>Font List of typefaces</h3>
 * The type face names of this javascript program (FONT_TYPEFACE_FAMILIES) was inspired by 
 * {@link https://en.wikipedia.org/wiki/List_of_typefaces}.
 * <p>Below is the list of font elements defined in this program:
 * <ul>
 * <li>PREFERRED_STYLE_FONT_FAMILY and SereniX.PREFERRED_STYLE_FONT_FAMILY</li>
 * <li>CSS_STYLE_FONT_FAMILIES_LIST and SereniX.CSS_STYLE_FONT_FAMILIES_LIST</li>
 * <li>CSS_STYLE_GENERIC_FONTS and SereniX.CSS_STYLE_GENERIC_FONTS</li>
 * <li>CSS_STYLE_FONT_FAMILIES</li>
  * <li>COMMON_WEBSAFE_FONTS_LIST and SereniX.COMMON_WEBSAFE_FONTS_LIST</li>
 * <li>COMMON_WEBSAFE_GENERIC_FONTS and SereniX.COMMON_WEBSAFE_GENERIC_FONTS</li>
 * <li>COMMON_WEBSAFE_FONTS and SereniX.COMMON_WEBSAFE_FONTS</li>
 * <li>WEBSAFE_FONT_SHORT_LIST and SereniX.WEBSAFE_FONT_SHORT_LIST</li>
 * <li>FONT_TYPEFACE_FAMILIES and SereniX.FONT_TYPEFACE_FAMILIES.</li>
 * </ul>
 * @source: serenix_font_typefaces.js
 * @author MARC KAMGA Olivier (kamga_marco@yahoo.com; mkamga.olivier@gmail.com)
 * @doc
 */
 



if (!window["SereniX"])
    window["SereniX"] = {
	    AUTHOR : "MARC KAMGA Olivier (kamga_marco@yahoo.com; mkamga.olivier@gmail.com)",
		VERSION: "1.0",
		SINCE : "2018-03-09"
	};
/**
 * 
 * <p><b>Note</b>: Each font family is ready to use: ends with semi-colon.</p>
 */
var PREFERRED_STYLE_FONT_FAMILY = [
    "Arial,Helmet,Freesans,sans-serif;",
    "'Arial Narrow','Nimbus Sans L',sans-serif;",
    "'Bookman Old Style',Bookman,'URW Bookman L',serif;",
    "'Century Gothic',Futura,'URW Gothic L',sans-serif;",
    "'Comic Sans MS',cursive;",
    "'Courier New',Courier,Freemono,'Nimbus Mono L',monospace;",
    "Constantina,Georgia,'Nimbus Roman No9 L',serif;",
    "Consolas,'Lucida Console','Bitstream VeraSans Mono','DejaVu Sans Mono',monospace;",
    "'Lucida Sans Unicode','Lucida Grande','Lucida Sans','DejaVu Sans Condensed',sans-serif;",
    "Cambria,'Palatino Linotype','Book Antiqua','URW Palladio L',serif;",
    "symbol,'Standard Symbols L';",
    "Cambria,'Times New Roman','Nimbus Roman No9 L','Freeserif',Times,serif;",
    "Verdana,Geneva,'Bitstream Vera Sans','DejaVu Sans',sans-serif;",
    "'Helvetica Neue',Arial,'Liberation Sans',FreeSans,sans-serif;",
    "Arial, Helvetica, sans-serif;",
    "'Arial Black', Gadget, sans-serif;",
    "'Bookman Old Style', serif;",
    "'Comic Sans MS', cursive;",
    "'Courier New', Courier, monospace;",
    "Garamond, serif;",
    "Georgia, serif;",
    "Impact, Charcoal, sans-serif;",
    "'Lucida Console', Monaco, monospace;",
    "'Lucida Sans Unicode', 'Lucida Grande', sans-serif;",
    "'MS Sans Serif', Geneva, sans-serif;",
    "'MS Serif', 'New York', serif;",
    "'Palatino Linotype', 'Book Antiqua', Palatino, serif;",
    "Symbol, sans-serif;",
    "Tahoma, Geneva, sans-serif;",
    "'Times New Roman', Times, serif;",
    "'Trebuchet MS', Helvetica, sans-serif;",
    "Verdana, Geneva, sans-serif;",
    "Webdings, sans-serif;",
    "Wingdings, 'Zapf Dingbats', sans-serif;"
];

SereniX.PREFERRED_STYLE_FONT_FAMILY = PREFERRED_STYLE_FONT_FAMILY;
	
(function() {
	var fonts = {
		"Sans-Serif" : [
			"Arial sans-serif",
			"Helvetica sans-serif",
			"'Gill Sans' sans-serif",
			"Lucida sans-serif",
			"'Helvetica Narrow' sans-serif",
			"sans-serif"
		],
		Serif : [
			"Times serif",
			"Times New Roman' serif",
			"Palatino serif",
			"Bookman serif",
			"'New Century Schoolbook' serif",
			"serif"
		],
		Monospace : [
			"Andale Mono monospace",
			"'Courier New' monospace",
			"Courier monospace",
			"Lucidatypewriter monospace",
			"Fixed monospace",
			"monospace"
		],
		Cursive : [
			"'Comic Sans' 'Comic Sans MS' cursive",
			"'Zapf Chancery' cursive",
			"Coronetscript cursive",
			"Florence cursive",
			"Parkavenue cursive",
			"cursive"
		],
		Fantasy : [
			"Impact fantasy",
			"Arnoldboecklin fantasy",
			"Oldtown fantasy",
			"Blippo fantasy",
			"Brushstroke fantasy",
			"fantasy"
		]
	};
    var list = [], generics = [];
	for (var n in fonts) {
	    list[list.length] = fonts[n];
		generics[generics.length] = n.toLowerCase();
	}
	SereniX.CSS_STYLE_FONT_FAMILIES_LIST = window["CSS_STYLE_FONT_FAMILIES_LIST"] = list;
	SereniX.CSS_STYLE_GENERIC_FONTS = window["CSS_STYLE_GENERIC_FONTS"] = generics;
    SereniX.CSS_STYLE_FONT_FAMILIES = window["CSS_STYLE_FONT_FAMILIES"] = fonts;
})();

	
	
(function() {
	var fonts= {
		Serif:[
			'Georgia, serif',
			'"Times New Roman", Times, serif',
			'"Palatino Linotype", Palatino, "Book Antiqua", serif'
		],
		"Sans-Serif": [
			'Arial, Helvetica, sans-serif',
			'"Arial Black", Gadget, sans-serif',
			'Impact, Charcoal, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'"Trebuchet MS", Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif'
		],
		Monospace: [
			'Courier, monospace',
			'"Courier New", Courier, monospace',
			'"Lucida Console", Monaco, monospace'
		],
		Cursive:  [
			'"Comic Sans MS", cursive',
			'"Courier New", Courier, monospace',
			'"Lucida Console", Monaco, monospace'
		],
		Fantasy: []
	};
	var list = [], generics = [];
	for (var n in fonts) {
	    list[list.length] = fonts[n];
		generics[generics.length] = n.toLowerCase();
	}
	SereniX.COMMON_WEBSAFE_FONTS_LIST = window["COMMON_WEBSAFE_FONTS_LIST"] = list;
	SereniX.COMMON_WEBSAFE_GENERIC_FONTS = window["COMMON_WEBSAFE_GENERIC_FONTS"] = generics;
    SereniX.COMMON_WEBSAFE_FONTS = window["COMMON_WEBSAFE_FONTS"] = fonts;
})();


var WEBSAFE_FONT_SHORT_LIST = [
    '"American Typewriter", "Courier New", Courier, Monaco, mono',
    '"Arial Rounded MT Bold", Helvetica, Arial, sans-serif',
    'Baskerville, Georgia, Garamond, "Times New Roman", Times, serif',
    '"Book Antiqua", Georgia, Garamond, "Times New Roman", Times, serif',
    '"Bookman Old Style", Georgia, Garamond, "Times New Roman", Times, serif',
    '"Brush Script MT", "Comic Sans", sans-serif',
    'Chalkboard, "Comic Sans", sans-serif',
    'Didot, Georgia, Garamond, "Times New Roman", Times, serif',
    'Futura, Impact, Helvetica, Arial, sans-serif',
    '"Gill Sans", "Lucida Grande", "Lucida Sans Unicode", Verdana, Helvetica, Arial, sans-serif',
    '"Helvetica Neue", Helvetica, Arial, sans-serif',
    '"Hoefler Text", Garamond, Georgia, "Times New Roman", Times, serif',
    '"Lucida Grande", "Lucida Sans Unicode", Lucida, Verdana, Helvetica, Arial, sans-serif',
    '"Marker Felt", "Comic Sans" sans-serif',
    'Myriad, Helvetica, Arial, sans-serif',
    'Optima, "Lucida Grande", "Lucida Sans Unicode", Verdana, Helvetica, Arial, sans-serif',
    'Palatino, "Book Antiqua", Georgia, Garamond, "Times New Roman", Times, serif',
    'Cochin, Georgia, Garamond, "Times New Roman", Times, serif',
    '"Goudy Old Style", garamond, "book antiqua", "Times New Roman", Times, serif sequence'
];

SereniX.WEBSAFE_FONT_SHORT_LIST = WEBSAFE_FONT_SHORT_LIST;

(function(c) {
    var FONT_TYPEFACE_FAMILIES = {
        "Serif": [
            "Adobe Jenson",
            "Albertus",
            "Aldus",
            "Alexandria",
            "Algerian",
            "American Typewriter",
            "Antiqua",
            "Arno ",
            "Aster",
            "Aurora",
            "News 706",
            "Baskerville",
            "Bell",
            "Belwe Roman",
            "Bembo",
            "Berkeley Old Style",
            "Bernhard Modern",
            "Bodoni",
            "Bauer Bodoni",
            "Bookman",
            "Bulmer",
            "Caledonia",
            "Californian FB",
            "Calisto MT",
            "Cambria",
            "Capitals",
            "Cartier",
            "Caslon",
            "Wyld",
            "Caslon Antique",
            "Fifteenth Century",
            "Catull",
            "Centaur",
            "Century Old Style",
            "Century Schoolbook",
            "New Century Schoolbook",
            "Century Schoolbook Infant",
            "Charis SIL",
            "Charter",
            "Cheltenham",
            "Clearface",
            "Cochin",
            "Colonna",
            "Computer Modern",
            "Concrete Roman",
            "Constantia",
            "Constructium",
            "Cooper Black",
            "Copperplate Gothic",
            "Corona",
            "News 705",
            "DejaVu Serif",
            "Didot",
            "Droid Serif",
            "Elephant",
            "Emerson",
            "Excelsior",
            "News 702",
            "Fairfield",
            "FF Scala",
            "Footlight",
            "FreeSerif",
            "Friz Quadrata",
            "Garamond",
            "Gentium",
            "Georgia",
            "Gloucester",
            "Goudy Old Style",
            "Goudy",
            "Granjon",
            "High Tower Text",
            "Hoefler Text",
            "IBM Plex Serif",
            "Imprint",
            "Ionic No. 5",
            "News 701",
            "ITC Benguiat",
            "Janson",
            "Jokerman",
            "Joanna",
            "Korinna",
            "Lexicon",
            "Liberation Serif",
            "Linux Libertine",
            "Literaturnaya",
            "Lucida Bright",
            "Melior",
            "Memphis",
            "Miller",
            "Minion",
            "Modern",
            "Mona Lisa",
            "Mrs Eaves",
            "MS Serif",
            "New York",
            "Nimbus Roman",
            "NPS Rawlinson Roadway",
            "OCR A Extended",
            "Onyx",
            "Palatino",
            "Book Antiqua",
            "Perpetua",
            "Plantin",
            "Playbill",
            "Primer",
            "Renault",
            "Requiem",
            "Rotis Serif",
            "Sabon",
            "Sistina",
            "Souvenir",
            "STIX",
            "Sylfaen",
            "Times New Roman",
            "Times",
            "Torino",
            "Trajan",
            "Trinit�",
            "Trump Mediaeval",
            "Utopia",
            "Vera Serif",
            "Wide Latin",
            "Windsor",
            "XITS"
        ],
        "Slab serif": [
            "Alexandria",
            "American Typewriter",
            "Archer",
            "Athens",
            "Candida",
            "Cholla Slab",
            "City",
            "Clarendon",
            "Concrete Roman",
            "Courier",
            "Egyptienne",
            "Guardian Egyptian",
            "Ionic No. 5",
            "Lexia",
            "Memphis",
            "Nilland",
            "Roboto Slab",
            "Rockwell",
            "Schadow",
            "Serifa",
            "Skeleton Antique",
            "Sreda",
            "Swift",
            "Tower"
        ],
        "Sans-serif": [
            "Agency FB",
            "Akzidenz-Grotesk",
            "Andal� Sans",
            "Antique Olive",
            "Arial",
            "Arial Unicode MS",
            "Avant Garde Gothic",
            "Avenir",
            "Bank Gothic",
            "Bauhaus",
            "Bell Centennial",
            "Bell Gothic",
            "Benguiat Gothic",
            "Berlin Sans",
            "Brandon Grotesque",
            "Calibri",
            "Casey",
            "Century Gothic",
            "Charcoal",
            "Chicago",
            "Clearview",
            "Comic Sans",
            "Compacta",
            "Corbel",
            "DejaVu Sans",
            "DIN",
            "Dotum",
            "Droid Sans",
            "Dyslexie",
            "Ecofont",
            "Eras",
            "Esseltub",
            "Espy Sans",
            "Eurocrat",
            "Eurostile",
            "Square 721",
            "FF Dax",
            "FF Meta",
            "FF Scala Sans",
            "Fira Sans",
            "Folio",
            "Franklin Gothic",
            "FreeSans",
            "Frutiger",
            "Futura",
            "Geneva",
            "Gill Sans",
            "Gill Sans Schoolbook",
            "Gotham",
            "Haettenschweiler",
            "Handel Gothic",
            "Harabara Mais",
            "Hei",
            "Helvetica",
            "Helvetica Neue",
            "Swiss 721",
            "Highway Gothic",
            "Hobo",
            "IBM Plex Sans",
            "Impact",
            "Industria",
            "Interstate",
            "Johnston/New Johnston",
            "Kabel",
            "Klavika",
            "Liberation Sans",
            "Linux Biolinum",
            "Lucida Sans",
            "Lucida Grande",
            "Lucida Sans Unicode",
            "Lydian",
            "Meiryo",
            "Meta",
            "Microgramma",
            "Modern",
            "Motorway",
            "MS Sans Serif",
            "Myriad",
            "Neutraface",
            "Neuzeit S",
            "News Gothic",
            "Nimbus Sans L",
            "Open Sans",
            "Optima",
            "Parisine",
            "Product Sans",
            "Proxima Nova",
            "PT Sans",
            "Rail Alphabet",
            "Roboto",
            "Rotis Sans",
            "San Francisco",
            "Segoe UI",
            "Skia",
            "Source Sans Pro",
            "Sweden Sans",
            "Syntax",
            "System",
            "Tahoma",
            "Template Gothic",
            "Thesis Sans",
            "Tiresias",
            "Trade Gothic",
            "Transport",
            "Trebuchet MS",
            "Twentieth Century",
            "Ubuntu",
            "Unica",
            "Univers",
            "Zurich",
            "Vera Sans",
            "Verdana"
        ],
        "Semi-serif": [
            "Nyala",
            "Rotis Semi Serif",
            "Easyreading"
        ],
        "Monospace": [
            "3x3",
            "Andal� Mono",
            "Arial Monospaced",
            "Bitstream Vera",
            "Consolas",
            "Courier",
            "Courier New",
            "DejaVu Sans Mono",
            "Droid Sans Mono",
            "Everson Mono",
            "Fixed",
            "Fixedsys",
            "Fixedsys Excelsior",
            "HyperFont",
            "IBM Plex Mono",
            "Inconsolata",
            "Letter Gothic",
            "Liberation Mono",
            "Lucida Console",
            "Lucida Sans Typewriter",
            "Lucida Typewriter",
            "Menlo",
            "MICR",
            "Monaco",
            "Monospace",
            "MS Gothic",
            "MS Mincho",
            "Nimbus Mono L",
            "OCR-A",
            "OCR-B",
            "PragmataPro",
            "Prestige Elite",
            "ProFont",
            "Proggy programming fonts",
            "SimHei",
            "SimSun",
            "Source Code Pro",
            "Terminal",
            "Trixie",
            "Ubuntu Mono",
            "Vera Sans Mono"
        ],
        "Script": {
            "Brush scripts": [
                "Balloon",
                "Brush Script",
                "Choc",
                "Dom Casual",
                "Mistral",
                "Papyrus",
                "Segoe Script",
                "Utopia"
            ],
            "Calligraphic": [
                "American Scribe",
                "AMS Euler",
                "Apple Chancery",
                "Forte",
                "French Script",
                "ITC Zapf Chancery",
                "Kuenstler Script",
                "Monotype Corsiva",
                "Old English Text MT",
                "Zapfino"
            ],
            "Handwriting": [
                "Andy",
                "Ashley Script",
                "C�zanne",
                "Chalkboard",
                "Comic Sans MS",
                "Dom Casual",
                "Harabara Hand",
                "Kristen",
                "Lucida Handwriting"
            ],
            "Other script": [
                "Coronet",
                "Curlz",
                "Gravura",
                "Script",
                "Wiesbaden Swing"
            ]
        },
        "Blackletter": [
            "Bastard",
            "Breitkopf Fraktur",
            "Cloister Black",
            "Fette Fraktur",
            "Fletcher",
            "Fraktur",
            "Lucida Blackletter",
            "Old English Text",
            "Schwabacher"
        ],
        "Non-Latin": [
            "Aharoni",
            "Aparajita",
            "Arial",
            "Calibri",
            "Chandas",
            "Gadugi",
            "Grecs du roi",
            "Hanacaraka",
            "Japanese Gothic",
            "Jomolhari",
            "Kiran",
            "Kochi",
            "Koren",
            "Kruti Dev",
            "Malgun Gothic",
            "Meiryo",
            "Microsoft JhengHei",
            "Microsoft YaHei",
            "Mincho",
            "Ming",
            "Mona",
            "MS Gothic",
            "Nastaliq Navees",
            "Perpetua Greek",
            "Porson",
            "Segoe UI Symbol",
            "Shruti",
            "SimSun",
            "Sylfaen",
            "Tahoma",
            "Tengwar",
            "Tibetan Machine Uni",
            "Wilson Greek"
        ],
        "Unicode fonts": [
            "Alphabetum",
            "Arial Unicode MS",
            "Batang and Gungsuh",
            "Bitstream Cyberbit",
            "Bitstream Vera",
            "Charis SIL",
            "Code2000",
            "Code2001",
            "Code2002",
            "DejaVu fonts",
            "Doulos SIL",
            "Everson Mono",
            "Fallback font",
            "Fixedsys Excelsior",
            "Free UCS Outline Fonts aka FreeFont",
            "Gentium",
            "GNU Unifont",
            "Georgia Ref",
            "Gulim",
            "New Gulim and Dotum",
            "Junicode",
            "Kelvinch",
            "LastResort",
            "Lucida Grande",
            "Lucida Sans Unicode",
            "MS Gothic",
            "MS Mincho",
            "Nimbus Sans Global",
            "Noto",
            "PragmataPro",
            "Squarish Sans CT v0.10",
            "STIX",
            "Titus Cyberbit Basic",
            "Verdana Ref",
            "XITS"
        ],
        "Symbol fonts": [
            "Apple Symbols",
            "Asana-Math",
            "Blackboard bold",
            "Bookshelf Symbol 7",
            "Cambria Math",
            "Computer Modern",
            "Lucida Math",
            "Marlett",
            "Symbol",
            "Webdings",
            "Wingdings",
            "Wingdings 2",
            "Wingdings 3",
            "Zapf Dingbats"
        ],
        "Decorative fonts": [
            "Ad Lib",
            "Allegro",
            "Andreas",
            "Arnold B�cklin",
            "Astur",
            "Banco",
            "Bauhaus",
            "Braggadocio",
            "Broadway",
            "Caslon Antique",
            "Cooper Black",
            "Curlz",
            "Ellington",
            "Exocet",
            "FIG Script",
            "Forte",
            "Gabriola",
            "Horizon",
            "Jim Crow",
            "Lo-Type",
            "Neuland",
            "Peignot",
            "San Francisco",
            "Stencil",
            "Umbra",
            "Westminster",
            "Willow",
            "Windsor"
        ],
        "Simulation": [
            "Lithos",
            "Skia"
        ],
        "Miscellaneous": [
            "Compatil",
            "Generis",
            "Grasset",
            "LED",
            "Luxi"
        ]
    };

    FONT_TYPEFACE_FAMILIES["Dingbat"] = FONT_TYPEFACE_FAMILIES["Symbol fonts"];
    FONT_TYPEFACE_FAMILIES["Display"] = FONT_TYPEFACE_FAMILIES["Decorative fonts"];
    FONT_TYPEFACE_FAMILIES["Mimicry fonts"] = FONT_TYPEFACE_FAMILIES["Simulation"];
	
	var ls = [];
	function list(obj, ls) {
		var o, len;
		for (var n in obj) {
			o = obj[n];
			if (Array.isArray(o)) {
				len = o.length;
				for (var i = 0; i < len; i++) {
					ls[ls.length] = o[i];
				}
			} else if (typeof o === "object") {
			    list(o, ls);
			}
		}
	}
	list(FONT_TYPEFACE_FAMILIES, ls);
	
	var tfs = function __tfs__() {
	    families = (tfs||__tfs__).__FONT_TYPEFACE_FAMILIES__;
	};
	tfs.__FONT_TYPEFACE_FAMILIES__ = FONT_TYPEFACE_FAMILIES;
	
	tfs.contains=function(typeface) {
	    var fams = this.__FONT_TYPEFACE_FAMILIES__||(tfs||__tfs__).__FONT_TYPEFACE_FAMILIES__;
	    return fams.indexOf(typeface) >= 0;
	};
	/**
	 * Returns o copy of the list of typefaces.
	 * @return {Array<String>}
	 */
	tfs.getTypefaces=function() {
	    var fams = this.__FONT_TYPEFACE_FAMILIES__||(tfs||__tfs__)
		        .__FONT_TYPEFACE_FAMILIES__.FONT_TYPEFACE_FAMILIES;
		if (!window["cloneObj"]) {
		    window["cloneObj"] = function(obj, recursive) {
			    if (typeof obj === "undefined" || obj === null)
				    return obj;
			    if (Array.isArray(obj)) {
				    var arr = [];
				    var n = obj.length;
					if (recursive) {
					    for (var i = 0; i < n; i++) {
							arr[i] = cloneObj(obj[i], true);
						}
					} else {
						for (var i = 0; i < n; i++) {
							arr[i] = obj[i];
						}
					}
					return arr;
				} else if (obj instanceof Date) {
				    return new Date(obj.getTime());
				} else if (typeof obj === "object") {
				    var _obj = {};
				    if (recursive) {
						for (var n in obj) {
						    if (n !== "_proto_")
							    _obj[n] = cloneObj(obj[n]);
						}
					} else {
					    for (var n in obj) {
						    if (n !== "_proto_")
							    _obj[n] = obj[n];
						}
					}
					return _obj;
				} else
				    return obj;
				
			};
		    
		}
		return cloneObj(fams, true);
	};
	/**
	 * List of all typeface names
	 */
	FONT_TYPEFACE_FAMILIES["TYPEFACES"] = FONT_TYPEFACE_FAMILIES["TYPE_FACES"] = ls;
	
	
    window["FONT_TYPEFACE_FAMILIES"] = c.FONT_TYPEFACE_FAMILIES = tfs;
})(SereniX);