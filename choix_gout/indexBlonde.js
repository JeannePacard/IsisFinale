(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"indexBlonde_atlas_1", frames: [[0,0,1124,746],[0,748,1147,674],[1126,0,356,106],[1126,454,180,4],[1126,289,176,53],[1126,216,178,71],[1126,108,356,106],[1126,344,176,53],[1126,399,172,53]]}
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



(lib.CachedBmp_196 = function() {
	this.initialize(img.CachedBmp_196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2643,128);


(lib.CachedBmp_195 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_194 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_193 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_192 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["indexBlonde_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(img.CachedBmp_186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2643,128);


(lib.blonde_epice = function() {
	this.initialize(img.blonde_epice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,4000);


(lib.blonde_fruite = function() {
	this.initialize(img.blonde_fruite);
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
	this.instance = new lib.CachedBmp_196();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1321.5,64);


(lib.texte_fruite = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_195();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,562,373);


(lib.texte_epice = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_194();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573.5,337);


(lib.repro = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_193();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.repro, new cjs.Rectangle(0,0,178,53), null);


(lib.bouton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_189();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bouton, new cjs.Rectangle(0,0,178,53), null);


(lib.blonde_fruite_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.blonde_epice();
	this.instance.setTransform(0,0,0.1161,0.1161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.5,464.6);


(lib.blonde_epice_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.blonde_fruite();
	this.instance.setTransform(0,0,0.1161,0.1161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.5,464.6);


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
	this.instance = new lib.CachedBmp_188();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,88,26.5), null);


(lib.epice = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_187();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epice, new cjs.Rectangle(0,0,86,26.5), null);


(lib.choix_fruite = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_192();
	this.instance.setTransform(-0.75,31.55,0.5,0.5);

	this.instance_1 = new lib.epice();
	this.instance_1.setTransform(43.25,83.45,1,1,0,0,0,43,13.2);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.CachedBmp_191();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.choix_fruite, new cjs.Rectangle(-0.7,0,90,96.8), null);


(lib.choix_epice = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_190();
	this.instance.setTransform(-1,70.25,0.5,0.5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(44.65,13.2,1,1,0,0,0,43.9,13.2);
	this.instance_1.alpha = 0.3516;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.choix_epice, new cjs.Rectangle(-1,0,89.8,105.8), null);


// stage content:
(lib.indexBlonde = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [13,33,58];
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
		_this.movieClip_3.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('/IsisFinale/choix_gout/indexEpice.html', '_self');
		});
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_1.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(14);
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
		_this.movieClip_2.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(34);
		});
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_3.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('/IsisFinale/choix_gout/indexFruit.html', '_self');
		});
	}
	this.frame_58 = function() {
		var _this = this;
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et arrête le clip.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndStop(13);
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.movieClip_3.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('/IsisFinale/choix_gout/indexEpice.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(20).call(this.frame_33).wait(25).call(this.frame_58).wait(1));

	// texte_fruite
	this.instance = new lib.texte_fruite("synched",0);
	this.instance.setTransform(2222,552.8,1,1,0,0,0,281,186.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1).to({regY:186.5,x:2171.15,y:552.7,alpha:0.0714},0).wait(1).to({x:2120.35,alpha:0.1429},0).wait(1).to({x:2069.55,alpha:0.2143},0).wait(1).to({x:2018.7,alpha:0.2857},0).wait(1).to({x:1967.9,alpha:0.3571},0).wait(1).to({x:1917.1,alpha:0.4286},0).wait(1).to({x:1866.3,alpha:0.5},0).wait(1).to({x:1815.45,alpha:0.5714},0).wait(1).to({x:1764.65,alpha:0.6429},0).wait(1).to({x:1713.85,alpha:0.7143},0).wait(1).to({x:1663,alpha:0.7857},0).wait(1).to({x:1612.2,alpha:0.8571},0).wait(1).to({x:1561.4,alpha:0.9286},0).wait(1).to({x:1510.6,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// choix_fruite
	this.instance_1 = new lib.choix_fruite();
	this.instance_1.setTransform(268.9,495.65,1,1,0,0,0,44.2,48.2);

	this.movieClip_2 = new lib.choix_fruite();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(268.9,495.65,1,1,0,0,0,44.2,48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.movieClip_2}]},19).to({state:[]},1).wait(25));

	// bouton_copy
	this.movieClip_3 = new lib.repro();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(1644,793.5,1,1,0,0,0,89,26.5);
	this.movieClip_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(13).to({_off:false},0).wait(46));

	// bouton
	this.instance_2 = new lib.bouton();
	this.instance_2.setTransform(2030.35,793.5,1,1,0,0,0,89,26.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:1998.15,alpha:0.0833},0).wait(1).to({x:1965.95,alpha:0.1667},0).wait(1).to({x:1933.75,alpha:0.25},0).wait(1).to({x:1901.55,alpha:0.3333},0).wait(1).to({x:1869.35,alpha:0.4167},0).wait(1).to({x:1837.15,alpha:0.5},0).wait(1).to({x:1804.95,alpha:0.5833},0).wait(1).to({x:1772.75,alpha:0.6667},0).wait(1).to({x:1740.55,alpha:0.75},0).wait(1).to({x:1708.35,alpha:0.8333},0).wait(1).to({x:1676.15,alpha:0.9167},0).wait(1).to({x:1644,alpha:1},0).to({_off:true},1).wait(46));

	// txt_epice
	this.instance_3 = new lib.texte_epice("synched",0);
	this.instance_3.setTransform(2228.15,534.8,1,1,0,0,0,286.8,168.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:168.5,x:2173.4,y:534.7,alpha:0.0769},0).wait(1).to({x:2118.65,alpha:0.1538},0).wait(1).to({x:2063.9,alpha:0.2308},0).wait(1).to({x:2009.2,alpha:0.3077},0).wait(1).to({x:1954.45,alpha:0.3846},0).wait(1).to({x:1899.7,alpha:0.4615},0).wait(1).to({x:1845,alpha:0.5385},0).wait(1).to({x:1790.25,alpha:0.6154},0).wait(1).to({x:1735.5,alpha:0.6923},0).wait(1).to({x:1680.8,alpha:0.7692},0).wait(1).to({x:1626.05,alpha:0.8462},0).wait(1).to({x:1571.3,alpha:0.9231},0).wait(1).to({x:1516.6,alpha:1},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(1).to({x:1543.95},0).wait(1).to({x:1571.3},0).wait(1).to({x:1598.65},0).wait(1).to({x:1626},0).wait(1).to({x:1653.35},0).wait(1).to({x:1680.7},0).wait(1).to({x:1708.05},0).wait(1).to({x:1735.4},0).wait(1).to({x:1762.75},0).wait(1).to({x:1790.1},0).wait(1).to({x:1817.45},0).wait(1).to({x:1844.8},0).wait(1).to({x:1872.2},0).wait(1).to({x:1899.55},0).wait(1).to({x:1926.9},0).wait(1).to({x:1954.25},0).wait(1).to({x:1981.6},0).wait(1).to({x:2008.95},0).wait(1).to({x:2036.3},0).wait(1).to({x:2063.65},0).wait(1).to({x:2091},0).wait(1).to({x:2118.35},0).wait(1).to({x:2145.7},0).wait(1).to({x:2173.05},0).wait(1).to({x:2200.4},0).wait(1).to({x:2227.8},0).wait(1).to({x:2177,alpha:0.0714},0).wait(1).to({x:2126.2,alpha:0.1429},0).wait(1).to({x:2075.4,alpha:0.2143},0).wait(1).to({x:2024.6,alpha:0.2857},0).wait(1).to({x:1973.8,alpha:0.3571},0).wait(1).to({x:1923,alpha:0.4286},0).wait(1).to({x:1872.2,alpha:0.5},0).wait(1).to({x:1821.4,alpha:0.5714},0).wait(1).to({x:1770.6,alpha:0.6429},0).wait(1).to({x:1719.8,alpha:0.7143},0).wait(1).to({x:1669,alpha:0.7857},0).wait(1).to({x:1618.2,alpha:0.8571},0).wait(1).to({x:1567.4,alpha:0.9286},0).wait(1).to({x:1516.6,alpha:1},0).wait(1));

	// choix_button
	this.movieClip_1 = new lib.choix_epice();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(267.75,500.25,1,1,0,0,0,43.8,52.8);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(13).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).wait(25));

	// choix_epice
	this.instance_4 = new lib.choix_epice();
	this.instance_4.setTransform(-79.7,497.6,1,1,0,0,0,43.8,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:43.9,regY:52.9,x:-50.6,y:497.9},0).wait(1).to({x:-21.65,y:498.1},0).wait(1).to({x:7.3,y:498.35},0).wait(1).to({x:36.25,y:498.55},0).wait(1).to({x:65.15,y:498.8},0).wait(1).to({x:94.1,y:499},0).wait(1).to({x:123.05,y:499.2},0).wait(1).to({x:152,y:499.45},0).wait(1).to({x:180.95,y:499.65},0).wait(1).to({x:209.9,y:499.9},0).wait(1).to({x:238.85,y:500.1},0).wait(1).to({x:267.85,y:500.35},0).to({_off:true},1).wait(46));

	// titre
	this.instance_5 = new lib.titre("synched",0);
	this.instance_5.setTransform(996.4,-48.5,1,1,0,0,0,660.8,31.9);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.CachedBmp_186();
	this.instance_6.setTransform(335.6,171.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:32,y:-29,alpha:0.0769},0).wait(1).to({y:-9.6,alpha:0.1538},0).wait(1).to({y:9.8,alpha:0.2308},0).wait(1).to({y:29.2,alpha:0.3077},0).wait(1).to({y:48.6,alpha:0.3846},0).wait(1).to({y:68,alpha:0.4615},0).wait(1).to({y:87.4,alpha:0.5385},0).wait(1).to({y:106.8,alpha:0.6154},0).wait(1).to({y:126.2,alpha:0.6923},0).wait(1).to({y:145.6,alpha:0.7692},0).wait(1).to({y:165,alpha:0.8462},0).wait(1).to({y:184.4,alpha:0.9231},0).wait(1).to({y:203.8,alpha:1},0).to({_off:true},1).wait(45));

	// blonde_fruite
	this.instance_7 = new lib.blonde_fruite_1("synched",0);
	this.instance_7.setTransform(952.2,523.2,1,1,0,0,0,174.2,232.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(1).to({regY:232.3,rotation:-4.9996,y:523.25,alpha:0.0526},0).wait(1).to({rotation:-9.9993,alpha:0.1053},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.1579},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.2105},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.2632},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.3158},0).wait(1).to({rotation:4.9996,x:952.2,alpha:0.3684},0).wait(1).to({rotation:-4.9996,y:523.25,alpha:0.4211},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.4737},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.5263},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.5789},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.6316},0).wait(1).to({rotation:6.997,y:523.25,alpha:0.6842},0).wait(1).to({rotation:-1.005,alpha:0.7368},0).wait(1).to({rotation:-9.0069,y:523.3,alpha:0.7895},0).wait(1).to({rotation:-5.5635,x:952.2,y:523.25,alpha:0.8421},0).wait(1).to({rotation:-2.12,y:523.3,alpha:0.8947},0).wait(1).to({rotation:1.3234,y:523.25,alpha:0.9474},0).wait(1).to({rotation:0,y:523.3,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:232.2,y:523.2},0).wait(1).to({startPosition:0},0).wait(1).to({regY:232.3,rotation:-4.9996,y:523.25,alpha:0.9467},0).wait(1).to({rotation:-9.9993,alpha:0.8933},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.84},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.7867},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.7333},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.68},0).wait(1).to({rotation:4.9996,x:952.2,alpha:0.6267},0).wait(1).to({rotation:-4.9996,y:523.25,alpha:0.5733},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.52},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.4167},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.3133},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.21},0).wait(1).to({rotation:6.997,y:523.25},0).wait(1).to({rotation:-1.005},0).wait(1).to({rotation:-9.0069,y:523.3},0).wait(1).to({rotation:-5.5635,x:952.2,y:523.25,alpha:0.1567},0).wait(1).to({rotation:-2.12,y:523.3,alpha:0.1033},0).wait(1).to({rotation:1.3234,y:523.25,alpha:0.05},0).wait(1).to({rotation:0,y:523.3,alpha:0},0).wait(1));

	// blonde_epice
	this.instance_8 = new lib.blonde_epice_1("synched",0);
	this.instance_8.setTransform(952.2,523.2,1,1,0,0,0,174.2,232.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:232.3,y:523.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:232.2,y:523.2},0).wait(1).to({regY:232.3,rotation:-4.9996,y:523.25,alpha:0.9474},0).wait(1).to({rotation:-9.9993,alpha:0.8947},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.8421},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.7895},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.7368},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.6842},0).wait(1).to({rotation:4.9996,x:952.2,alpha:0.6316},0).wait(1).to({rotation:-4.9996,y:523.25,alpha:0.5789},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.5263},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.4737},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.4211},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.3684},0).wait(1).to({rotation:6.9998,x:952.2,alpha:0.3158},0).wait(1).to({rotation:-0.9993,x:952.15,y:523.25,alpha:0.2632},0).wait(1).to({rotation:-8.9984,x:952.2,y:523.3,alpha:0.2105},0).wait(1).to({rotation:-5.3991,y:523.25,alpha:0.1579},0).wait(1).to({rotation:-1.7998,x:952.15,y:523.3,alpha:0.1053},0).wait(1).to({rotation:1.7995,y:523.25,alpha:0.0526},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(5).to({_off:false,regY:232.2,rotation:0,x:952.2,y:523.2},0).wait(1).to({regY:232.3,rotation:-4.9996,y:523.25,alpha:0.05},0).wait(1).to({rotation:-9.9993,alpha:0.1},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.15},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.2033},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.2567},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.31},0).wait(1).to({rotation:4.9996,x:952.2,alpha:0.3633},0).wait(1).to({rotation:-4.9996,y:523.25,alpha:0.4167},0).wait(1).to({rotation:-14.9989,x:952.15,alpha:0.47},0).wait(1).to({rotation:-4.9996,x:952.2,alpha:0.53},0).wait(1).to({rotation:4.9996,y:523.3,alpha:0.59},0).wait(1).to({rotation:14.9989,x:952.15,alpha:0.65},0).wait(1).to({rotation:6.9998,x:952.2,alpha:0.6933},0).wait(1).to({rotation:-0.9993,x:952.15,y:523.25,alpha:0.7367},0).wait(1).to({rotation:-8.9984,x:952.2,y:523.3,alpha:0.78},0).wait(1).to({rotation:-5.3991,y:523.25,alpha:0.8333},0).wait(1).to({rotation:-1.7998,x:952.15,y:523.3,alpha:0.8867},0).wait(1).to({rotation:1.7995,y:523.25,alpha:0.94},0).wait(1).to({rotation:-0.3934,x:952.2,y:523.3,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(835.5,459.6,1679.4,360.4);
// library properties:
lib.properties = {
	id: '86C5CAF7DB854943859CE53FA43B4970',
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#171717",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_196.png", id:"CachedBmp_196"},
		{src:"images/CachedBmp_186.png", id:"CachedBmp_186"},
		{src:"images/blonde_epice.png", id:"blonde_epice"},
		{src:"images/blonde_fruite.png", id:"blonde_fruite"},
		{src:"images/indexBlonde_atlas_1.png", id:"indexBlonde_atlas_1"}
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
an.compositions['86C5CAF7DB854943859CE53FA43B4970'] = {
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
