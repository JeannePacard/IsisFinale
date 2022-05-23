(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"indexAmbre_atlas_1", frames: [[0,764,1181,744],[0,0,1176,762],[0,1510,356,106],[358,1699,404,4],[358,1575,399,60],[358,1705,404,4],[745,1510,399,60],[358,1711,404,4],[358,1637,399,60],[0,1726,388,73],[0,1618,356,106],[0,1801,399,60],[358,1510,385,63]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_185 = function() {
	this.initialize(img.CachedBmp_185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2643,128);


(lib.CachedBmp_184 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(img.CachedBmp_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2643,128);


(lib.CachedBmp_173 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["indexAmbre_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ambrée_biscuit = function() {
	this.initialize(img.ambrée_biscuit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,4000);


(lib.ambrée_biscuitpngcopy = function() {
	this.initialize(img.ambrée_biscuitpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,4000);


(lib.ambrée_caramel = function() {
	this.initialize(img.ambrée_caramel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,4000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.titre = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_185();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1321.5,64);


(lib.texte_droite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_184();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,590.5,372);


(lib.texte_caramel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_183();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,588,381);


(lib.Symbole7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_182();
	this.instance.setTransform(-89,-26.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole7, new cjs.Rectangle(-89,-26.5,178,53), null);


(lib.Symbole1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_174();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(0,0,1321.5,64), null);


(lib.reproduire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_173();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.reproduire, new cjs.Rectangle(0,0,178,53), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_172();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,199.5,30), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_171();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,192.5,31.5), null);


(lib.biere_caramel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.ambrée_caramel();
	this.instance.setTransform(0,0,0.1161,0.1161);

	this.instance_1 = new lib.ambrée_biscuit();
	this.instance_1.setTransform(0,0,0.1161,0.1161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.5,464.5);


(lib.ambre_biscuit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.ambrée_biscuitpngcopy();
	this.instance.setTransform(0,0,0.1161,0.1161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.5,464.6);


(lib.Symbole6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_181();
	this.instance.setTransform(-100.5,-17.9,0.5,0.5);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(-4.35,34.5,1,1,0,0,0,96.2,15.7);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.CachedBmp_180();
	this.instance_2.setTransform(-100.25,-50.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole6, new cjs.Rectangle(-100.5,-50.1,202,100.4), null);


(lib.Symbole5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_179();
	this.instance.setTransform(-100.5,-17.9,0.5,0.5);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(-4.35,34.5,1,1,0,0,0,96.2,15.7);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.CachedBmp_178();
	this.instance_2.setTransform(-100.25,-50.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole5, new cjs.Rectangle(-100.5,-50.1,202,100.4), null);


(lib.Symbole4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_177();
	this.instance.setTransform(0.05,32.2,0.5,0.5);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(96.2,84.6,1,1,0,0,0,96.2,15.7);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.CachedBmp_176();
	this.instance_2.setTransform(0.3,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole4, new cjs.Rectangle(0,0,202.1,100.4), null);


(lib.Symbole2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_175();
	this.instance.setTransform(0,68.9,0.5,0.5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(100,15,1,1,0,0,0,99.7,15);
	this.instance_1.alpha = 0.3516;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(0,0,199.8,105.4), null);


// stage content:
(lib.indexAmbre = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [13,33,46,58];
	// timeline functions:
	this.frame_13 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_2.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(14);
		});
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_5.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('/choix_gout/indexCaramel.html', '_self');
		});
	}
	this.frame_33 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_3.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(39);
		});
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_5.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('/choix_gout/indexThe.html', '_self');
		});
	}
	this.frame_46 = function() {
		
	}
	this.frame_58 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_4.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(14);
		});
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_5.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('/choix_gout/indexCaramel.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(20).call(this.frame_33).wait(13).call(this.frame_46).wait(12).call(this.frame_58).wait(1));

	// texte_caramel
	this.instance = new lib.texte_caramel("synched",0);
	this.instance.setTransform(1940.15,556.8,1,1,0,0,0,294,190.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:190.5,x:1905.5,y:556.7,alpha:0.0833},0).wait(1).to({x:1870.9,alpha:0.1667},0).wait(1).to({x:1836.3,alpha:0.25},0).wait(1).to({x:1801.7,alpha:0.3333},0).wait(1).to({x:1767.1,alpha:0.4167},0).wait(1).to({x:1732.5,alpha:0.5},0).wait(1).to({x:1697.85,alpha:0.5833},0).wait(1).to({x:1663.25,alpha:0.6667},0).wait(1).to({x:1628.65,alpha:0.75},0).wait(1).to({x:1594.05,alpha:0.8333},0).wait(1).to({x:1559.45,alpha:0.9167},0).wait(1).to({x:1524.85,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(25).to({_off:false,regY:190.6,x:2234.15,y:556.8},0).wait(1).to({regY:190.5,x:2183.45,y:556.7,alpha:0.0714},0).wait(1).to({x:2132.8,alpha:0.1429},0).wait(1).to({x:2082.15,alpha:0.2143},0).wait(1).to({x:2031.45,alpha:0.2857},0).wait(1).to({x:1980.8,alpha:0.3571},0).wait(1).to({x:1930.15,alpha:0.4286},0).wait(1).to({x:1879.45,alpha:0.5},0).wait(1).to({x:1828.8,alpha:0.5714},0).wait(1).to({x:1778.15,alpha:0.6429},0).wait(1).to({x:1727.45,alpha:0.7143},0).wait(1).to({x:1676.8,alpha:0.7857},0).wait(1).to({x:1626.15,alpha:0.8571},0).wait(1).to({x:1575.45,alpha:0.9286},0).wait(1).to({x:1524.8,alpha:1},0).wait(1));

	// choix_caramel_copy
	this.movieClip_2 = new lib.Symbole5();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(324.95,498.9,1,1,0,0,0,0.5,0);

	this.movieClip_4 = new lib.Symbole6();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(324.95,498.9,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_2}]},13).to({state:[]},1).to({state:[{t:this.movieClip_4}]},25).to({state:[{t:this.movieClip_4}]},19).wait(1));

	// choix_caramel
	this.instance_1 = new lib.Symbole4();
	this.instance_1.setTransform(-150.05,498.9,1,1,0,0,0,101,50.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:50.2,x:-110.45,y:499,alpha:0.0833},0).wait(1).to({x:-70.85,alpha:0.1667},0).wait(1).to({x:-31.3,alpha:0.25},0).wait(1).to({x:8.3,alpha:0.3333},0).wait(1).to({x:47.85,alpha:0.4167},0).wait(1).to({x:87.45,alpha:0.5},0).wait(1).to({x:127,alpha:0.5833},0).wait(1).to({x:166.55,alpha:0.6667},0).wait(1).to({x:206.15,alpha:0.75},0).wait(1).to({x:245.7,alpha:0.8333},0).wait(1).to({x:285.3,alpha:0.9167},0).wait(1).to({x:324.9,alpha:1},0).to({_off:true},1).wait(46));

	// texte_droite_thevert
	this.instance_2 = new lib.texte_droite("synched",0);
	this.instance_2.setTransform(2236.45,552.3,1,1,0,0,0,295.1,186.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:295.2,regY:186,x:2185.7,y:552.2,alpha:0.0714},0).wait(1).to({x:2134.9,alpha:0.1429},0).wait(1).to({x:2084.05,alpha:0.2143},0).wait(1).to({x:2033.25,alpha:0.2857},0).wait(1).to({x:1982.4,alpha:0.3571},0).wait(1).to({x:1931.6,alpha:0.4286},0).wait(1).to({x:1880.75,alpha:0.5},0).wait(1).to({x:1829.95,alpha:0.5714},0).wait(1).to({x:1779.1,alpha:0.6429},0).wait(1).to({x:1728.3,alpha:0.7143},0).wait(1).to({x:1677.45,alpha:0.7857},0).wait(1).to({x:1626.65,alpha:0.8571},0).wait(1).to({x:1575.8,alpha:0.9286},0).wait(1).to({x:1525,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(15));

	// choix_thevert
	this.instance_3 = new lib.Symbole2();
	this.instance_3.setTransform(323.7,501.4,1,1,0,0,0,99.8,52.6);

	this.movieClip_3 = new lib.Symbole2();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(323.7,501.4,1,1,0,0,0,99.8,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.movieClip_3}]},19).to({state:[]},1).wait(25));

	// reproduire_bouton_copy
	this.movieClip_5 = new lib.Symbole7();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.setTransform(1644,793.5);
	this.movieClip_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(13).to({_off:false},0).wait(46));

	// reproduire_bouton
	this.instance_4 = new lib.reproduire();
	this.instance_4.setTransform(2030,793.5,1,1,0,0,0,89,26.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:1997.8,alpha:0.0833},0).wait(1).to({x:1965.65,alpha:0.1667},0).wait(1).to({x:1933.5,alpha:0.25},0).wait(1).to({x:1901.3,alpha:0.3333},0).wait(1).to({x:1869.15,alpha:0.4167},0).wait(1).to({x:1837,alpha:0.5},0).wait(1).to({x:1804.8,alpha:0.5833},0).wait(1).to({x:1772.65,alpha:0.6667},0).wait(1).to({x:1740.5,alpha:0.75},0).wait(1).to({x:1708.3,alpha:0.8333},0).wait(1).to({x:1676.15,alpha:0.9167},0).wait(1).to({x:1644,alpha:1},0).to({_off:true},1).wait(46));

	// titre
	this.instance_5 = new lib.Symbole1();
	this.instance_5.setTransform(996.4,-48.5,1,1,0,0,0,660.8,31.9);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.titre("synched",0);
	this.instance_6.setTransform(996.4,203.7,1,1,0,0,0,660.8,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:32,y:-29,alpha:0.0769},0).wait(1).to({y:-9.6,alpha:0.1538},0).wait(1).to({y:9.8,alpha:0.2308},0).wait(1).to({y:29.2,alpha:0.3077},0).wait(1).to({y:48.6,alpha:0.3846},0).wait(1).to({y:68,alpha:0.4615},0).wait(1).to({y:87.4,alpha:0.5385},0).wait(1).to({y:106.8,alpha:0.6154},0).wait(1).to({y:126.2,alpha:0.6923},0).wait(1).to({y:145.6,alpha:0.7692},0).wait(1).to({y:165,alpha:0.8462},0).wait(1).to({y:184.4,alpha:0.9231},0).wait(1).to({y:203.8,alpha:1},0).to({_off:true},1).wait(45));

	// biere_thevert
	this.instance_7 = new lib.ambre_biscuit("synched",0);
	this.instance_7.setTransform(952.2,523.2,1,1,0,0,0,174.2,232.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(1).to({regY:232.3,rotation:-4.9996,y:523.25,alpha:0.0526},0).wait(1).to({rotation:-9.9993,alpha:0.1053},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.1579},0).wait(1).to({rotation:-4.9994,x:952.2,alpha:0.2105},0).wait(1).to({rotation:5.0002,y:523.3,alpha:0.2632},0).wait(1).to({rotation:14.9997,x:952.15,alpha:0.3158},0).wait(1).to({rotation:5.0002,x:952.2,alpha:0.3684},0).wait(1).to({rotation:-4.9994,y:523.25,alpha:0.4211},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.4737},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.5263},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.5789},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.6316},0).wait(1).to({rotation:8.1435,x:952.2,y:523.25,alpha:0.6842},0).wait(1).to({rotation:1.2882,alpha:0.7368},0).wait(1).to({rotation:-5.5672,alpha:0.7895},0).wait(1).to({rotation:-2.4436,alpha:0.8421},0).wait(1).to({rotation:0.68,alpha:0.8947},0).wait(1).to({rotation:3.8036,x:952.15,y:523.3,alpha:0.9474},0).wait(1).to({rotation:0,x:952.2,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:232.2,y:523.2},0).wait(1).to({alpha:0.9414},0).wait(1).to({regY:232.3,rotation:-4.9996,y:523.25,alpha:0.9067},0).wait(1).to({rotation:-9.9993,alpha:0.8733},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.84},0).wait(1).to({rotation:-4.9994,x:952.2,alpha:0.7867},0).wait(1).to({rotation:5.0002,y:523.3,alpha:0.7333},0).wait(1).to({rotation:14.9997,x:952.15,alpha:0.68},0).wait(1).to({rotation:5.0002,x:952.2,alpha:0.6267},0).wait(1).to({rotation:-4.9994,y:523.25,alpha:0.5733},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.52},0).wait(1).to({rotation:-7.4994,alpha:0.48},0).wait(1).to({rotation:0,x:952.2,y:523.3,alpha:0.44},0).wait(1).to({rotation:7.4995,alpha:0.4},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.36},0).wait(1).to({rotation:8.1435,x:952.2,y:523.25,alpha:0.31},0).wait(1).to({rotation:1.2882,alpha:0.26},0).wait(1).to({rotation:-5.5672,alpha:0.21},0).wait(1).to({rotation:-2.4436,alpha:0.14},0).wait(1).to({rotation:0.68,alpha:0.07},0).wait(1).to({rotation:-2.3871,x:952.15,y:523.3,alpha:0},0).wait(1));

	// biere_caramel
	this.instance_8 = new lib.biere_caramel("synched",0);
	this.instance_8.setTransform(952.2,523.2,1,1,0,0,0,174.2,232.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-4.9996,y:523.15,alpha:0.9474},0).wait(1).to({rotation:-9.9993,x:952.15,alpha:0.8947},0).wait(1).to({rotation:-14.9989,alpha:0.8421},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.7895},0).wait(1).to({rotation:4.9996,y:523.2,alpha:0.7368},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.6842},0).wait(1).to({rotation:4.9996,x:952.2,alpha:0.6316},0).wait(1).to({rotation:-4.9996,y:523.15,alpha:0.5789},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.5263},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.4737},0).wait(1).to({rotation:4.9996,y:523.2,alpha:0.4211},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.3684},0).wait(1).to({rotation:8.3811,x:952.2,y:523.15,alpha:0.3158},0).wait(1).to({rotation:1.7633,x:952.15,alpha:0.2632},0).wait(1).to({rotation:-4.8545,alpha:0.2105},0).wait(1).to({rotation:-1.9833,x:952.2,alpha:0.1579},0).wait(1).to({rotation:0.888,alpha:0.1053},0).wait(1).to({rotation:3.7592,alpha:0.0526},0).wait(1).to({rotation:0,y:523.2,alpha:0},0).to({_off:true},1).wait(5).to({_off:false},0).wait(1).to({rotation:-4.9996,y:523.15,alpha:0.05},0).wait(1).to({rotation:-9.9993,x:952.15,alpha:0.1},0).wait(1).to({rotation:-14.9989,alpha:0.15},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.2033},0).wait(1).to({rotation:4.9996,y:523.2,alpha:0.2567},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.31},0).wait(1).to({rotation:4.9996,x:952.2,alpha:0.3633},0).wait(1).to({rotation:-4.9996,y:523.15,alpha:0.4167},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.47},0).wait(1).to({rotation:-7.4994,alpha:0.51},0).wait(1).to({rotation:0,x:952.2,y:523.2,alpha:0.55},0).wait(1).to({rotation:7.4995,alpha:0.59},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.63},0).wait(1).to({rotation:8.3811,x:952.2,y:523.15,alpha:0.68},0).wait(1).to({rotation:1.7633,x:952.15,alpha:0.73},0).wait(1).to({rotation:-4.8545,alpha:0.78},0).wait(1).to({rotation:-1.9833,x:952.2,alpha:0.8333},0).wait(1).to({rotation:0.888,alpha:0.8867},0).wait(1).to({rotation:1.2867,alpha:0.94},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(709,459.6,1822.9,360.4);
// library properties:
lib.properties = {
	id: 'BE835EB3548D4277920DBA52C6A3E7BB',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#171717",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_185.png", id:"CachedBmp_185"},
		{src:"images/CachedBmp_174.png", id:"CachedBmp_174"},
		{src:"images/ambrée_biscuit.png", id:"ambrée_biscuit"},
		{src:"images/ambrée_biscuitpngcopy.png", id:"ambrée_biscuitpngcopy"},
		{src:"images/ambrée_caramel.png", id:"ambrée_caramel"},
		{src:"images/indexAmbre_atlas_1.png", id:"indexAmbre_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BE835EB3548D4277920DBA52C6A3E7BB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;