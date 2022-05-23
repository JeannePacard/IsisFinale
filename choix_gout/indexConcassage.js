(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "indexConcassage_atlas_1",
      frames: [
        [0, 904, 1166, 1134],
        [0, 0, 1509, 902],
      ],
    },
    {
      name: "indexConcassage_atlas_2",
      frames: [
        [1177, 0, 495, 100],
        [1381, 536, 300, 56],
        [1585, 196, 356, 106],
        [0, 0, 1175, 828],
        [1177, 298, 213, 161],
        [1392, 304, 213, 161],
        [1674, 0, 202, 194],
        [1381, 598, 434, 10],
        [1177, 102, 202, 194],
        [1811, 304, 202, 110],
        [1607, 444, 202, 90],
        [1177, 461, 202, 138],
        [1381, 102, 202, 194],
        [1811, 416, 202, 110],
        [1811, 528, 202, 68],
        [1607, 304, 202, 138],
      ],
    },
  ];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.CachedBmp_20 = function () {
    this.initialize(img.CachedBmp_20);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2263, 140);

  (lib.CachedBmp_19 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_18 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_17 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_16 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_15 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_14 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_13 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_12 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_11 = function () {
    this.initialize(img.CachedBmp_11);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2468, 1536);

  (lib.CachedBmp_10 = function () {
    this.initialize(ss["indexConcassage_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_9 = function () {
    this.initialize(ss["indexConcassage_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_8 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_7 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_6 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_5 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_4 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_3 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(13);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_2 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(14);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_1 = function () {
    this.initialize(ss["indexConcassage_atlas_2"]);
    this.gotoAndStop(15);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
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

  (lib.titre = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_20();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1131.5, 70);

  (lib.text_concass = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_19();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 247.5, 50);

  (lib.next_step = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_18();
    this.instance.setTransform(20.6, 15.35, 0.5, 0.5);

    this.instance_1 = new lib.CachedBmp_17();
    this.instance_1.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.next_step,
    new cjs.Rectangle(0, 0, 178, 53),
    null
  );

  (lib.malt_c = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_16();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 587.5, 414);

  (lib.malt_b = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_15();
    this.instance.setTransform(-0.05, -0.05, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.malt_b,
    new cjs.Rectangle(0, 0, 106.5, 80.5),
    null
  );

  (lib.malt = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_14();
    this.instance.setTransform(-0.05, -0.05, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 106.5, 80.5);

  (lib.handle = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_13();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 101, 97);

  (lib.d_text = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_10();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 583, 567);

  (lib.concasseur = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_9();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 754.5, 451);

  (lib.a_handleai = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_1();
    this.instance.setTransform(0.05, 28.05, 0.5, 0.5);

    this.instance_1 = new lib.CachedBmp_2();
    this.instance_1.setTransform(0, 67.05, 0.5, 0.5);

    this.instance_2 = new lib.CachedBmp_3();
    this.instance_2.setTransform(0, 82.05, 0.5, 0.5);

    this.instance_3 = new lib.CachedBmp_4();
    this.instance_3.setTransform(0.05, 82.05, 0.5, 0.5);

    this.instance_4 = new lib.CachedBmp_5();
    this.instance_4.setTransform(0, 82.05, 0.5, 0.5);

    this.instance_5 = new lib.CachedBmp_6();
    this.instance_5.setTransform(0, 68, 0.5, 0.5);

    this.instance_6 = new lib.CachedBmp_7();
    this.instance_6.setTransform(0.05, 42, 0.5, 0.5);

    this.instance_7 = new lib.CachedBmp_8();
    this.instance_7.setTransform(0.05, 0, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 101.1, 179.1);

  (lib.Path_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(3, 0, 0, 4)
      .p("EBCkAAKMiFHAAAIAAgTMCFHAAAg");
    this.shape.setTransform(427.5, 2.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_1,
    new cjs.Rectangle(0, 0, 855, 5),
    null
  );

  (lib.g_text = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_12();
    this.instance.setTransform(330.5, 757.85, 0.5, 0.5);

    this.instance_1 = new lib.Path_1();
    this.instance_1.setTransform(760.55, 760.35, 1, 1, 0, 0, 0, 427.5, 2.5);
    this.instance_1.alpha = 0.3086;

    this.instance_2 = new lib.CachedBmp_11();
    this.instance_2.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1234, 768);

  // stage content:
  (lib.indexConcassage = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [13, 54];
    // timeline functions:
    this.frame_13 = function () {
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
      _this.movieClip_1.on("click", function () {
        /*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et poursuit la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
        _this.gotoAndPlay(14);
      });
    };
    this.frame_54 = function () {
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
      _this.movieClip_2.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("/choix_gout/indexEmpatage.html", "_self");
      });
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .wait(13)
        .call(this.frame_13)
        .wait(41)
        .call(this.frame_54)
        .wait(1)
    );

    // text_concasser
    this.instance = new lib.text_concass("synched", 0);
    this.instance.setTransform(1016.1, 134.1, 1, 1, 0, 0, 0, 123.7, 31.1);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(9)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 123.8, regY: 25, x: 1016.2, y: 156.5, alpha: 0.25 }, 0)
        .wait(1)
        .to({ y: 185.05, alpha: 0.5 }, 0)
        .wait(1)
        .to({ y: 213.6, alpha: 0.75 }, 0)
        .wait(1)
        .to({ y: 242.15, alpha: 1 }, 0)
        .to({ _off: true }, 1)
        .wait(41)
    );

    // malt
    this.movieClip_1 = new lib.malt_b();
    this.movieClip_1.name = "movieClip_1";
    this.movieClip_1.setTransform(991.75, 341.25, 1, 1, 0, 0, 0, 53.1, 40.2);
    this.movieClip_1.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 29);
    this.movieClip_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_1)
        .wait(13)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(41)
    );

    // a_handle
    this.instance_1 = new lib.a_handleai();
    this.instance_1.setTransform(667.8, 682.7, 1, 1, 0, 0, 0, 50.6, 62.6);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(27)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 50.5, regY: 89.5, x: 667.7, y: 706.35 }, 0)
        .wait(1)
        .to({ y: 703.1 }, 0)
        .wait(1)
        .to({ y: 706.35 }, 0)
        .wait(1)
        .to({ y: 709.6 }, 0)
        .wait(1)
        .to({ y: 706.35 }, 0)
        .wait(1)
        .to({ y: 703.1 }, 0)
        .wait(1)
        .to({ y: 705.7 }, 0)
        .wait(1)
        .to({ y: 708.3 }, 0)
        .wait(1)
        .to({ y: 705.05 }, 0)
        .wait(1)
        .to({ y: 701.8 }, 0)
        .wait(1)
        .to({ y: 705.05 }, 0)
        .wait(1)
        .to({ y: 708.3 }, 0)
        .wait(1)
        .to({ y: 705.05 }, 0)
        .wait(1)
        .to({ y: 701.8 }, 0)
        .wait(1)
        .to({ y: 705.7 }, 0)
        .to({ _off: true }, 1)
        .wait(12)
    );

    // handle
    this.instance_2 = new lib.handle("synched", 0);
    this.instance_2.setTransform(667.75, 668.6, 1, 1, 0, 0, 0, 50.5, 48.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ _off: true }, 27)
        .wait(16)
        .to({ _off: false }, 0)
        .wait(6)
        .to({ startPosition: 0 }, 0)
        .wait(6)
    );

    // concasseur
    this.instance_3 = new lib.concasseur("synched", 0);
    this.instance_3.setTransform(783.35, 582.35, 1, 1, 0, 0, 0, 663.1, 279.2);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({ regX: 377.2, regY: 225.5, x: 497.45, y: 528.65 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 522.15 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 528.65 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 522.15 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 528.65 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 522.15 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 528.65 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 522.15 }, 0)
        .wait(1)
        .to({ y: 525.4 }, 0)
        .wait(1)
        .to({ y: 528.65 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
    );

    // malt_c
    this.instance_4 = new lib.malt_c("synched", 0);
    this.instance_4.setTransform(
      788.5,
      705.15,
      0.0579,
      0.0579,
      0,
      0,
      0,
      292.7,
      205.5
    );
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(44)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 293.8,
            regY: 207,
            scaleX: 0.0863,
            scaleY: 0.0863,
            x: 830.2,
            y: 708,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.1147, scaleY: 0.1147, x: 868.65, y: 706.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.143, scaleY: 0.143, x: 903.85, y: 701.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.1714, scaleY: 0.1714, x: 935.95, y: 691.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.1998, scaleY: 0.1998, x: 964.8, y: 678.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.2281, scaleY: 0.2281, x: 990.5, y: 660.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.2565, scaleY: 0.2565, x: 1013, y: 639.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.2849, scaleY: 0.2849, x: 1032.35, y: 613.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.3132, scaleY: 0.3132, x: 1048.5, y: 583.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.3416, scaleY: 0.3416, x: 1061.45, y: 549.9 }, 0)
        .wait(1)
    );

    // a_malt
    this.instance_5 = new lib.malt("synched", 0);
    this.instance_5.setTransform(991.75, -54.3, 1, 1, 0, 0, 0, 53.1, 40.2);
    this.instance_5.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(1)
        .to({ regX: 53.2, x: 991.85, y: -21.3, alpha: 0.0833 }, 0)
        .wait(1)
        .to({ y: 11.65, alpha: 0.1667 }, 0)
        .wait(1)
        .to({ y: 44.55, alpha: 0.25 }, 0)
        .wait(1)
        .to({ y: 77.55, alpha: 0.3333 }, 0)
        .wait(1)
        .to({ y: 110.5, alpha: 0.4167 }, 0)
        .wait(1)
        .to({ y: 143.45, alpha: 0.5 }, 0)
        .wait(1)
        .to({ y: 176.4, alpha: 0.5833 }, 0)
        .wait(1)
        .to({ y: 209.4, alpha: 0.6667 }, 0)
        .wait(1)
        .to({ y: 242.35, alpha: 0.75 }, 0)
        .wait(1)
        .to({ y: 275.3, alpha: 0.8333 }, 0)
        .wait(1)
        .to({ y: 308.25, alpha: 0.9167 }, 0)
        .wait(1)
        .to({ y: 341.25, alpha: 1 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ x: 950.8, y: 283.2 }, 0)
        .wait(1)
        .to({ x: 914.3, y: 240.95 }, 0)
        .wait(1)
        .to({ x: 882.25, y: 214.5 }, 0)
        .wait(1)
        .to({ x: 854.7, y: 203.85 }, 0)
        .wait(1)
        .to({ x: 831.6, y: 208.95 }, 0)
        .wait(1)
        .to({ x: 812.95, y: 229.8 }, 0)
        .wait(1)
        .to({ x: 798.8, y: 266.4 }, 0)
        .wait(1)
        .to({ x: 789.15, y: 318.8 }, 0)
        .wait(1)
        .to({ x: 783.9, y: 387 }, 0)
        .wait(1)
        .to({ x: 783.2, y: 471.05 }, 0)
        .to({ _off: true }, 1)
        .wait(30)
    );

    // texte_droite
    this.instance_6 = new lib.d_text("synched", 0);
    this.instance_6.setTransform(2239.45, 505.8, 1, 1, 0, 0, 0, 291.6, 283.4);
    this.instance_6.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to(
          { regX: 291.5, regY: 283.5, x: 2185.45, y: 506.05, alpha: 0.0769 },
          0
        )
        .wait(1)
        .to({ x: 2131.55, y: 506.2, alpha: 0.1538 }, 0)
        .wait(1)
        .to({ x: 2077.7, y: 506.35, alpha: 0.2308 }, 0)
        .wait(1)
        .to({ x: 2023.8, y: 506.5, alpha: 0.3077 }, 0)
        .wait(1)
        .to({ x: 1969.9, y: 506.65, alpha: 0.3846 }, 0)
        .wait(1)
        .to({ x: 1916.05, y: 506.8, alpha: 0.4615 }, 0)
        .wait(1)
        .to({ x: 1862.15, y: 507, alpha: 0.5385 }, 0)
        .wait(1)
        .to({ x: 1808.3, y: 507.15, alpha: 0.6154 }, 0)
        .wait(1)
        .to({ x: 1754.4, y: 507.3, alpha: 0.6923 }, 0)
        .wait(1)
        .to({ x: 1700.5, y: 507.45, alpha: 0.7692 }, 0)
        .wait(1)
        .to({ x: 1646.65, y: 507.6, alpha: 0.8462 }, 0)
        .wait(1)
        .to({ x: 1592.75, y: 507.75, alpha: 0.9231 }, 0)
        .wait(1)
        .to({ x: 1538.9, y: 507.95, alpha: 1 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
    );

    // texte_gauche
    this.instance_7 = new lib.g_text("synched", 0);
    this.instance_7.setTransform(179.85, 793.35, 1, 1, 0, 0, 0, 616.9, 383.9);
    this.instance_7.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(1)
        .to({ regX: 617, regY: 384, x: 222.65, y: 778.65, alpha: 0.0769 }, 0)
        .wait(1)
        .to({ x: 265.35, y: 763.85, alpha: 0.1538 }, 0)
        .wait(1)
        .to({ x: 308.05, y: 749.05, alpha: 0.2308 }, 0)
        .wait(1)
        .to({ x: 350.75, y: 734.25, alpha: 0.3077 }, 0)
        .wait(1)
        .to({ x: 393.45, y: 719.45, alpha: 0.3846 }, 0)
        .wait(1)
        .to({ x: 436.15, y: 704.65, alpha: 0.4615 }, 0)
        .wait(1)
        .to({ x: 478.8, y: 689.9, alpha: 0.5385 }, 0)
        .wait(1)
        .to({ x: 521.5, y: 675.1, alpha: 0.6154 }, 0)
        .wait(1)
        .to({ x: 564.2, y: 660.3, alpha: 0.6923 }, 0)
        .wait(1)
        .to({ x: 606.9, y: 645.5, alpha: 0.7692 }, 0)
        .wait(1)
        .to({ x: 649.55, y: 630.7, alpha: 0.8462 }, 0)
        .wait(1)
        .to({ x: 692.25, y: 615.9, alpha: 0.9231 }, 0)
        .wait(1)
        .to({ x: 734.95, y: 601.15, alpha: 1 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
    );

    // titre
    this.instance_8 = new lib.titre("synched", 0);
    this.instance_8.setTransform(685.85, -78.5, 1, 1, 0, 0, 0, 565.6, 34.9);
    this.instance_8.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(1)
        .to({ regX: 565.8, regY: 35, x: 686.05, y: -63, alpha: 0.0769 }, 0)
        .wait(1)
        .to({ y: -47.6, alpha: 0.1538 }, 0)
        .wait(1)
        .to({ y: -32.2, alpha: 0.2308 }, 0)
        .wait(1)
        .to({ y: -16.8, alpha: 0.3077 }, 0)
        .wait(1)
        .to({ y: -1.4, alpha: 0.3846 }, 0)
        .wait(1)
        .to({ y: 14, alpha: 0.4615 }, 0)
        .wait(1)
        .to({ y: 29.4, alpha: 0.5385 }, 0)
        .wait(1)
        .to({ y: 44.75, alpha: 0.6154 }, 0)
        .wait(1)
        .to({ y: 60.15, alpha: 0.6923 }, 0)
        .wait(1)
        .to({ y: 75.55, alpha: 0.7692 }, 0)
        .wait(1)
        .to({ y: 90.95, alpha: 0.8462 }, 0)
        .wait(1)
        .to({ y: 106.35, alpha: 0.9231 }, 0)
        .wait(1)
        .to({ y: 121.75, alpha: 1 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
    );

    // bouton_copy
    this.movieClip_2 = new lib.next_step();
    this.movieClip_2.name = "movieClip_2";
    this.movieClip_2.setTransform(1719.35, 865.9, 1, 1, 0, 0, 0, 89, 26.5);
    this.movieClip_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_2).wait(54).to({ _off: false }, 0).wait(1)
    );

    // bouton
    this.instance_9 = new lib.next_step();
    this.instance_9.setTransform(2032.05, 865.9, 1, 1, 0, 0, 0, 89, 26.5);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(43)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 2000.75, alpha: 0.1 }, 0)
        .wait(1)
        .to({ x: 1969.5, alpha: 0.2 }, 0)
        .wait(1)
        .to({ x: 1938.2, alpha: 0.3 }, 0)
        .wait(1)
        .to({ x: 1906.95, alpha: 0.4 }, 0)
        .wait(1)
        .to({ x: 1875.7, alpha: 0.5 }, 0)
        .wait(1)
        .to({ x: 1844.4, alpha: 0.6 }, 0)
        .wait(1)
        .to({ x: 1813.15, alpha: 0.7 }, 0)
        .wait(1)
        .to({ x: 1781.85, alpha: 0.8 }, 0)
        .wait(1)
        .to({ x: 1750.6, alpha: 0.9 }, 0)
        .wait(1)
        .to({ x: 1719.35, alpha: 1 }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(523, 426.6, 2007.9, 750.9);
  // library properties:
  lib.properties = {
    id: "1731B3E0BABBD84EB2BDCC5134B998B4",
    width: 1920,
    height: 1080,
    fps: 25,
    color: "#171717",
    opacity: 1.0,
    manifest: [
      { src: "images5/CachedBmp_20.png", id: "CachedBmp_20" },
      { src: "images5/CachedBmp_11.png", id: "CachedBmp_11" },
      {
        src: "images5/indexConcassage_atlas_1.png",
        id: "indexConcassage_atlas_1",
      },
      {
        src: "images5/indexConcassage_atlas_2.png",
        id: "indexConcassage_atlas_2",
      },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["1731B3E0BABBD84EB2BDCC5134B998B4"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
