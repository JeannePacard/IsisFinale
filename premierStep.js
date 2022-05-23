(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"premierStep_atlas_1", frames: [[586,0,584,777],[160,1128,150,68],[1172,0,201,778],[0,1058,176,68],[1375,0,201,778],[0,1128,158,68],[1578,0,201,778],[586,779,584,777],[0,806,583,124],[0,1558,1781,176],[0,0,584,804],[0,932,583,124]]}
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



(lib.CachedBmp_58 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["premierStep_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ambree_caramel = function() {
	this.initialize(img.ambree_caramel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,4000);


(lib.blonde_fruite = function() {
	this.initialize(img.blonde_fruite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,4000);


(lib.brune_gb = function() {
	this.initialize(img.brune_gb);
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


(lib.gb_brune = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.brune_gb();
	this.instance.setTransform(0,0,0.1161,0.1161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.5,464.6);


(lib.fr_blonde = function(mode,startPosition,loop,reversed) {
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


(lib.car_ambre = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ambree_caramel();
	this.instance.setTransform(0,0,0.1161,0.1161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.5,464.6);


(lib.brune = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(-1.5,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_57();
	this.instance_1.setTransform(-1.5,326.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brune, new cjs.Rectangle(-1.5,0,292,388.5), null);


(lib.bouteille_brune = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(9.1,147.45,0.3457,0.3457);

	this.instance_1 = new lib.CachedBmp_55();
	this.instance_1.setTransform(0,0,0.3457,0.3457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.5,269);


(lib.bouteille_blonde = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_54();
	this.instance.setTransform(3.7,147.4,0.3457,0.3457);

	this.instance_1 = new lib.CachedBmp_53();
	this.instance_1.setTransform(0,0,0.3457,0.3457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.5,269);


(lib.bouteille_ambree = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(7.1,148.05,0.3457,0.3457);

	this.instance_1 = new lib.CachedBmp_51();
	this.instance_1.setTransform(0,0,0.3457,0.3457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.5,269);


(lib.blonde = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_50();
	this.instance.setTransform(-1.5,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_49();
	this.instance_1.setTransform(-1.5,326.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blonde, new cjs.Rectangle(-1.5,0,292,388.6), null);


(lib.banniere = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_48();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,890.5,88);


(lib.ambree = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_47();
	this.instance.setTransform(-1.5,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_57();
	this.instance_1.setTransform(-1.5,340.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ambree, new cjs.Rectangle(-1.5,0,292,402.1), null);


// stage content:
(lib.premierStep = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,18,37,56,67,78,89];
	// timeline functions:
	this.frame_0 = function() {
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
		_this.blonde.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(1);
		});
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.ambree.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(19);
		});
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.brune.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(38);
		});
	}
	this.frame_18 = function() {
		var _this = this;
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(57);
	}
	this.frame_37 = function() {
		var _this = this;
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(68);
	}
	this.frame_56 = function() {
		var _this = this;
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndPlay(79);
	}
	this.frame_67 = function() {
		var _this = this;
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('choix_gout/indexBlonde.html', '_self');
	}
	this.frame_78 = function() {
		var _this = this;
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('choix_gout/indexAmbre.html', '_self');
	}
	this.frame_89 = function() {
		var _this = this;
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('choix_gout/indexBrune.html', '_self');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(19).call(this.frame_37).wait(19).call(this.frame_56).wait(11).call(this.frame_67).wait(11).call(this.frame_78).wait(11).call(this.frame_89).wait(1));

	// car_ambre
	this.instance = new lib.car_ambre("synched",0);
	this.instance.setTransform(952.2,-240.85,1,1,0,0,0,174.2,232.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).wait(1).to({regY:232.3,y:-83.05},0).wait(1).to({y:74.6},0).wait(1).to({y:232.25},0).wait(1).to({y:305.1},0).wait(1).to({y:377.95},0).wait(1).to({y:450.8},0).wait(1).to({y:523.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(11));

	// tr_ambre
	this.instance_1 = new lib.bouteille_ambree("synched",0);
	this.instance_1.setTransform(953.45,540.15,1.4463,1.4462,0,0,0,34.6,134.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).wait(1).to({regX:34.7,regY:134.5,scaleY:1.4361,x:953.55,y:541.85},0).wait(1).to({scaleY:1.426,y:543.4},0).wait(1).to({scaleY:1.0396,x:953.5,y:595.2},0).wait(1).to({scaleY:1.1412,x:953.55,y:780.85},0).wait(1).to({scaleY:1.2429,y:966.45},0).wait(1).to({scaleY:1.3445,y:1152.1},0).wait(1).to({scaleY:1.4462,y:1337.65},0).to({_off:true},1).wait(14));

	// an_ambre
	this.instance_2 = new lib.bouteille_ambree("synched",0);
	this.instance_2.setTransform(953.4,540.2,1,1,0,0,0,34.6,134.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:34.7,regY:134.5,scaleX:1.0248,scaleY:1.0248,x:953.45,y:540.3},0).wait(1).to({scaleX:1.0496,scaleY:1.0496,y:540.25},0).wait(1).to({scaleX:1.0744,scaleY:1.0744,x:953.5},0).wait(1).to({scaleX:1.0992,scaleY:1.0992,y:540.3},0).wait(1).to({scaleX:1.124,scaleY:1.1239,y:540.25},0).wait(1).to({scaleX:1.1488,scaleY:1.1487},0).wait(1).to({scaleX:1.1736,scaleY:1.1735,y:540.3},0).wait(1).to({scaleX:1.1984,scaleY:1.1983,y:540.25},0).wait(1).to({scaleX:1.2231,scaleY:1.2231},0).wait(1).to({scaleX:1.2479,scaleY:1.2479},0).wait(1).to({scaleX:1.2727,scaleY:1.2727},0).wait(1).to({scaleX:1.2975,scaleY:1.2975},0).wait(1).to({scaleX:1.3223,scaleY:1.3222,x:953.55},0).wait(1).to({scaleX:1.3471,scaleY:1.347},0).wait(1).to({scaleX:1.3719,scaleY:1.3718},0).wait(1).to({scaleX:1.3967,scaleY:1.3966,x:953.5},0).wait(1).to({scaleX:1.4215,scaleY:1.4214,x:953.55},0).wait(1).to({scaleX:1.4463,scaleY:1.4462},0).to({_off:true},1).wait(52));

	// bouteille_ambre
	this.instance_3 = new lib.bouteille_ambree("synched",0);
	this.instance_3.setTransform(953.4,540.2,1,1,0,0,0,34.6,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).to({alpha:0},17).to({_off:true},1).wait(19).to({_off:false,alpha:1},0).to({alpha:0},18).to({_off:true},1).wait(33));

	// bg_brune
	this.instance_4 = new lib.gb_brune("synched",0);
	this.instance_4.setTransform(952.2,-240.85,1,1,0,0,0,174.2,232.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).wait(1).to({regY:232.3,y:-83.05},0).wait(1).to({y:74.6},0).wait(1).to({y:232.25},0).wait(1).to({y:305.1},0).wait(1).to({y:377.95},0).wait(1).to({y:450.8},0).wait(1).to({y:523.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// tr_brune
	this.instance_5 = new lib.bouteille_brune("synched",0);
	this.instance_5.setTransform(953.6,540.15,1.4463,1.4462,0,0,0,34.6,134.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).wait(1).to({regX:34.7,regY:134.5,x:953.7,y:540.25},0).wait(1).to({regX:34.6,regY:134.4,x:953.6,y:540.15},0).wait(1).to({regX:34.7,regY:134.5,scaleY:1.0396,x:953.7,y:595.2},0).wait(1).to({scaleY:1.1412,y:780.85},0).wait(1).to({scaleY:1.2429,y:966.45},0).wait(1).to({scaleY:1.3445,y:1152.1},0).wait(1).to({scaleY:1.4462,y:1337.65},0).to({_off:true},1).wait(3));

	// an_brune
	this.instance_6 = new lib.bouteille_brune("synched",0);
	this.instance_6.setTransform(1400.55,540.2,1,1,0,0,0,34.6,134.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).wait(1).to({regX:34.7,regY:134.5,scaleX:1.0248,scaleY:1.0248,x:1375.8,y:540.3},0).wait(1).to({scaleX:1.0496,scaleY:1.0496,x:1350.95,y:540.25},0).wait(1).to({scaleX:1.0744,scaleY:1.0744,x:1326.15},0).wait(1).to({scaleX:1.0992,scaleY:1.0992,x:1301.3,y:540.3},0).wait(1).to({scaleX:1.124,scaleY:1.1239,x:1276.5,y:540.25},0).wait(1).to({scaleX:1.1488,scaleY:1.1487,x:1251.65},0).wait(1).to({scaleX:1.1736,scaleY:1.1735,x:1226.8,y:540.3},0).wait(1).to({scaleX:1.1984,scaleY:1.1983,x:1202,y:540.25},0).wait(1).to({scaleX:1.2231,scaleY:1.2231,x:1177.15},0).wait(1).to({scaleX:1.2479,scaleY:1.2479,x:1152.35},0).wait(1).to({scaleX:1.2727,scaleY:1.2727,x:1127.5},0).wait(1).to({scaleX:1.2975,scaleY:1.2975,x:1102.65},0).wait(1).to({scaleX:1.3223,scaleY:1.3222,x:1077.85},0).wait(1).to({scaleX:1.3471,scaleY:1.347,x:1053},0).wait(1).to({scaleX:1.3719,scaleY:1.3718,x:1028.2},0).wait(1).to({scaleX:1.3967,scaleY:1.3966,x:1003.35},0).wait(1).to({scaleX:1.4215,scaleY:1.4214,x:978.55},0).wait(1).to({scaleX:1.4463,scaleY:1.4462,x:953.7},0).to({_off:true},1).wait(33));

	// bouteille_brune
	this.instance_7 = new lib.bouteille_brune("synched",0);
	this.instance_7.setTransform(1400.55,540.2,1,1,0,0,0,34.6,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).to({alpha:0},17).to({alpha:1},1).to({alpha:0},18).to({_off:true},1).wait(52));

	// bouteille_blonde_copy
	this.instance_8 = new lib.bouteille_blonde("synched",0);
	this.instance_8.setTransform(512.05,540.2,1,1,0,0,0,34.6,134.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({alpha:0},18).to({alpha:1},1).to({alpha:0},18).to({_off:true},1).wait(33));

	// fr_blonde
	this.instance_9 = new lib.fr_blonde("synched",0);
	this.instance_9.setTransform(952.2,-240.7,1,1,0,0,0,174.2,232.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(57).to({_off:false},0).wait(1).to({y:-83},0).wait(1).to({y:74.65},0).wait(1).to({y:232.3},0).wait(1).to({y:305.15},0).wait(1).to({y:378},0).wait(1).to({y:450.85},0).wait(1).to({y:523.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(22));

	// tr_blonde
	this.instance_10 = new lib.bouteille_blonde("synched",0);
	this.instance_10.setTransform(953.4,540.25,1.4463,1.4463,0,0,0,34.6,134.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({_off:false},0).wait(1).to({regX:34.7,regY:134.5,x:953.5,y:540.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:34.6,regY:134.3,scaleY:1.0395,x:953.4,y:595.05},0).wait(1).to({regX:34.7,regY:134.5,scaleY:1.1004,x:953.5,y:767.15},0).wait(1).to({scaleY:1.1612,y:939.1},0).wait(1).to({scaleY:1.2221,y:1111},0).wait(1).to({scaleY:1.2829,y:1282.95},0).to({_off:true},1).wait(25));

	// bouteille_blonde
	this.instance_11 = new lib.bouteille_blonde("synched",0);
	this.instance_11.setTransform(512.05,540.2,1,1,0,0,0,34.6,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0},0).wait(1).to({regX:34.7,regY:134.5,scaleX:1.0263,scaleY:1.0263,x:538.1,y:540.3},0).wait(1).to({scaleX:1.0525,scaleY:1.0525,x:564.05,y:540.25},0).wait(1).to({scaleX:1.0788,scaleY:1.0788,x:590.05,y:540.3},0).wait(1).to({scaleX:1.105,scaleY:1.105,x:616,y:540.25},0).wait(1).to({scaleX:1.1313,scaleY:1.1313,x:641.95,y:540.3},0).wait(1).to({scaleX:1.1575,scaleY:1.1575,x:667.9},0).wait(1).to({scaleX:1.1838,scaleY:1.1838,x:693.9,y:540.25},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:719.85,y:540.3},0).wait(1).to({scaleX:1.2363,scaleY:1.2363,x:745.8},0).wait(1).to({scaleX:1.2625,scaleY:1.2625,x:771.75},0).wait(1).to({scaleX:1.2888,scaleY:1.2888,x:797.7},0).wait(1).to({scaleX:1.315,scaleY:1.315,x:823.7,y:540.25},0).wait(1).to({scaleX:1.3413,scaleY:1.3413,x:849.65,y:540.3},0).wait(1).to({scaleX:1.3675,scaleY:1.3675,x:875.6},0).wait(1).to({scaleX:1.3938,scaleY:1.3938,x:901.55},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:927.5},0).wait(1).to({scaleX:1.4463,scaleY:1.4463,x:953.5},0).to({_off:true},1).wait(71));

	// banniere
	this.instance_12 = new lib.banniere("synched",0);
	this.instance_12.setTransform(963.2,211.45,1,1,0,0,0,445.1,54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0},0).to({alpha:0},17).to({alpha:1},1).to({alpha:0},18).to({alpha:1},1).to({alpha:0},18).to({_off:true},1).wait(33));

	// blonde
	this.blonde = new lib.blonde();
	this.blonde.name = "blonde";
	this.blonde.setTransform(511.7,553.5,1,1,0,0,0,144.5,194.2);

	this.timeline.addTween(cjs.Tween.get(this.blonde).wait(1).to({x:511.4,y:553.75,mode:"synched",startPosition:0},0).to({alpha:0},17).to({alpha:1},1).to({alpha:0},18).to({x:511.7,y:553.5,alpha:1,mode:"independent"},1).to({alpha:0},18).to({_off:true},1).wait(33));

	// ambree
	this.ambree = new lib.ambree();
	this.ambree.name = "ambree";
	this.ambree.setTransform(954.4,546.8,1,1,0,0,0,144.5,201);

	this.timeline.addTween(cjs.Tween.get(this.ambree).wait(1).to({mode:"synched",startPosition:0},0).to({x:955.4,alpha:0},17).to({x:954.4,alpha:1},1).to({x:955.4,alpha:0},18).to({x:954.4,alpha:1,mode:"independent"},1).to({alpha:0},18).to({_off:true},1).wait(33));

	// brune
	this.brune = new lib.brune();
	this.brune.name = "brune";
	this.brune.setTransform(1399,553.05,1,1,0,0,0,144.5,194.2);

	this.timeline.addTween(cjs.Tween.get(this.brune).wait(1).to({mode:"synched",startPosition:0},0).to({alpha:0},17).to({alpha:1},1).to({alpha:0},18).to({alpha:1,mode:"independent"},1).to({alpha:0},18).to({_off:true},1).wait(33));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1325.4,66.9,219.5999999999999,1465.3);
// library properties:
lib.properties = {
	id: '82A655828C1A624B880F880F11BAA833',
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#171717",
	opacity: 1.00,
	manifest: [
		{src:"images/ambree_caramel.png?1650279878595", id:"ambree_caramel"},
		{src:"images/blonde_fruite.png?1650279878595", id:"blonde_fruite"},
		{src:"images/brune_gb.png?1650279878595", id:"brune_gb"},
		{src:"images/premierStep_atlas_1.png?1650279878429", id:"premierStep_atlas_1"}
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
an.compositions['82A655828C1A624B880F880F11BAA833'] = {
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