(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.botao1NovoHTML = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.telaPrincipalcopy();
	this.instance.setTransform(1215.1,384,1,1,0,0,0,727.8,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0,974,641.1);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,27);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,967,634);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,886,157);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,303);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,887,134);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,852,389);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,341);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,27);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,463,274);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,379);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,156);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,217);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,536,70);


(lib.link_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
			
			function onClick (e) {
				if (APP) {
					APP.FancyBox.openText(that.name);
				} else {
					alert(that.name);
				}
			}
			
			this.removeAllEventListeners("click");
			this.addEventListener ("click", onClick);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// Layer 1
	this.instance = new lib.Bitmap2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,27);


(lib.Elemento11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-0.2,-17.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-17.2,576,341);


(lib.Elemento10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-121.1,-0.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.1,-0.4,852,389);


(lib.Elemento09 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap13();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,887,134);


(lib.Elemento08 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(0,-0.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,672,303);


(lib.Elemento07 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,886,157);


(lib.Elemento06 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-0.6,-0.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,145,156);


(lib.Elemento05 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-0.9,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,422,217);


(lib.Elemento04 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-1.2,-1.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,417,379);


(lib.Elemento03 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,463,274);


(lib.Elemento02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,536,70);


(lib.Elemento01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,967,634);


(lib.Botao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B64949").s().p("EggfAROMAAAgibMBA/AAAMAAAAibg");
	this.shape.setTransform(208.1,110.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.telaPrincipalcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tela01:14,tela02:114,tela03:169});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		var root = stage.getChildAt(0).getChildAt(0)
		var frameLabels = root.timeline._labels;
		
		var idTelaAtual = 1;
		var idTelaFinal = 3;
		
		if (!window.labelTo) {
			window.labelTo = "tela0" + idTelaAtual;
		}
		
		function onClickVoltar (e) {
			if (idTelaAtual > 1) {
				idTelaAtual--;
				window.labelTo = "tela0" + idTelaAtual;
				that.play();
			}
		}
		
		this.btnVoltar.removeAllEventListeners("click");
		this.btnVoltar.addEventListener ("click", onClickVoltar);
		
		
		function onClickAvancar (e) {
			if (idTelaAtual < idTelaFinal) {
				idTelaAtual++;
				window.labelTo = "tela0" + idTelaAtual;
				that.play();
			}
		}
		
		this.btnAvancar.removeAllEventListeners("click");
		this.btnAvancar.addEventListener ("click", onClickAvancar);
	}
	this.frame_64 = function() {
		this.stop();
		
		
		function onClickImage (e) {
			if (APP) {
				APP.FancyBox.openImage(e.target.id);
			} else {
				alert(e.target.id);
			}
		}
		
		this.Botao01.removeAllEventListeners("click");
		this.Botao01.addEventListener ("click", onClickImage);
		this.Botao01.id = "page01_01_01";
		
		
		this.Botao02.removeAllEventListeners("click");
		this.Botao02.addEventListener ("click", onClickImage);
		this.Botao02.id = "page01_01_02";
		
		
		this.Botao03.removeAllEventListeners("click");
		this.Botao03.addEventListener ("click", onClickImage);
		this.Botao03.id = "page01_01_03";
	}
	this.frame_113 = function() {
		this.gotoAndPlay (window.labelTo);
	}
	this.frame_139 = function() {
		this.stop();
		this.page01_02_01.name = "page01_02_01";
	}
	this.frame_168 = function() {
		this.gotoAndPlay (window.labelTo);
	}
	this.frame_204 = function() {
		this.stop();
	}
	this.frame_240 = function() {
		this.gotoAndPlay (window.labelTo);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64).call(this.frame_64).wait(49).call(this.frame_113).wait(26).call(this.frame_139).wait(29).call(this.frame_168).wait(36).call(this.frame_204).wait(36).call(this.frame_240).wait(22));

	// seta up
	this.btnAvancar = new lib.Botao();
	this.btnAvancar.setTransform(446.7,-340.2,0.056,0.196);
	new cjs.ButtonHelper(this.btnAvancar, 0, 1, 2, false, new lib.Botao(), 3);

	this.btnVoltar = new lib.Botao();
	this.btnVoltar.setTransform(-470.2,-340.2,0.055,0.198);
	new cjs.ButtonHelper(this.btnVoltar, 0, 1, 2, false, new lib.Botao(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B64949").s().p("AhkAAIDJjKIAABjIhmBnIBmBoIAABjg");
	this.shape.setTransform(-460.1,-318.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64949").s().p("AhkBoIBmhoIhmhnIAAhjIDJDKIjJDLg");
	this.shape_1.setTransform(459.1,-318.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.btnVoltar},{t:this.btnAvancar}]}).wait(263));

	// titulo
	this.Elemento02 = new lib.Elemento02();
	this.Elemento02.setTransform(-8.5,-311.4,1,1,0,0,0,267.8,35.2);
	this.Elemento02.alpha = 0;
	this.Elemento02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento02).wait(4).to({_off:false},0).to({alpha:1},10).wait(237).to({alpha:0},10).to({_off:true},1).wait(1));

	// botoes
	this.Botao03 = new lib.Botao();
	this.Botao03.setTransform(-70.4,131,0.334,0.637,0,0,0,208.2,110.2);
	new cjs.ButtonHelper(this.Botao03, 0, 1, 2, false, new lib.Botao(), 3);

	this.Botao02 = new lib.Botao();
	this.Botao02.setTransform(255,102.9,0.466,0.887,0,0,0,208.1,110.3);
	new cjs.ButtonHelper(this.Botao02, 0, 1, 2, false, new lib.Botao(), 3);

	this.Botao01 = new lib.Botao();
	this.Botao01.setTransform(250,-140.6,1,1,0,0,0,208.1,110.3);
	new cjs.ButtonHelper(this.Botao01, 0, 1, 2, false, new lib.Botao(), 3);

	this.page01_02_01 = new lib.link_mc();
	this.page01_02_01.setTransform(-351.6,-238.4,1.278,1,0,0,0,79,13.5);
	this.page01_02_01.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Botao01},{t:this.Botao02,p:{regX:208.1,regY:110.3,scaleX:0.466,scaleY:0.887,x:255,y:102.9}},{t:this.Botao03,p:{regX:208.2,regY:110.2,scaleX:0.334,scaleY:0.637,x:-70.4,y:131}}]},64).to({state:[]},1).to({state:[{t:this.Botao03,p:{regX:0,regY:0,scaleX:0.567,scaleY:1.073,x:-73.6,y:-47.2}},{t:this.page01_02_01}]},74).to({state:[]},1).to({state:[{t:this.Botao02,p:{regX:0,regY:0,scaleX:0.687,scaleY:1.29,x:-409.5,y:-92.2}},{t:this.Botao03,p:{regX:0,regY:0,scaleX:1.024,scaleY:1.245,x:-9.4,y:-88.2}}]},64).to({state:[]},1).wait(58));

	// 01-1
	this.Elemento03 = new lib.Elemento03();
	this.Elemento03.setTransform(-727.9,-108.8,1,1,0,0,0,231.7,137);
	this.Elemento03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento03).wait(19).to({_off:false},0).to({x:-207.8},13,cjs.Ease.get(1)).to({x:-217.8},2,cjs.Ease.get(-0.99)).wait(62).to({x:-207.8},2).to({x:-727.8},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(149));

	// 01-2
	this.Elemento04 = new lib.Elemento04();
	this.Elemento04.setTransform(250.4,-61.6,1,1,0,0,0,207.4,188.2);
	this.Elemento04.alpha = 0;
	this.Elemento04._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento04).wait(34).to({_off:false},0).to({alpha:1},10).wait(42).to({alpha:0},10).to({_off:true},1).wait(166));

	// 01-3
	this.Elemento05 = new lib.Elemento05();
	this.Elemento05.setTransform(214,108.4,1,1,0,0,0,210.1,108.4);
	this.Elemento05.alpha = 0;
	this.Elemento05._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento05).wait(44).to({_off:false},0).to({alpha:1},10).wait(21).to({alpha:0},10).to({_off:true},1).wait(177));

	// 01-4
	this.Elemento06 = new lib.Elemento06();
	this.Elemento06.setTransform(-68.3,138,1,1,0,0,0,71.7,77.3);
	this.Elemento06.alpha = 0;
	this.Elemento06._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento06).wait(54).to({_off:false},0).to({alpha:1},10).wait(1).to({alpha:0},10).to({_off:true},1).wait(187));

	// 02-1
	this.Elemento07 = new lib.Elemento07();
	this.Elemento07.setTransform(942.1,-166.6,1,1,0,0,0,443.1,78.3);
	this.Elemento07._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento07).wait(114).to({_off:false},0).to({x:-17.7},13,cjs.Ease.get(1)).to({x:-7.7},2,cjs.Ease.get(-0.99)).wait(21).to({x:-17.7},2).to({x:942.1},16,cjs.Ease.get(-0.99)).to({_off:true},1).wait(94));

	// 02-2
	this.Elemento08 = new lib.Elemento08();
	this.Elemento08.setTransform(-141.8,38.2,1,1,0,0,0,336.1,150.8);
	this.Elemento08.alpha = 0;
	this.Elemento08._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento08).wait(129).to({_off:false},0).to({alpha:1},10).wait(1).to({alpha:0},10).wait(18).to({_off:true},1).wait(94));

	// 03-1
	this.Elemento09 = new lib.Elemento09();
	this.Elemento09.setTransform(-938,-178.5,1,1,0,0,0,443.3,66.8);
	this.Elemento09._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento09).wait(169).to({_off:false},0).to({x:1.9},13,cjs.Ease.get(1)).to({x:-7.9},2,cjs.Ease.get(-0.99)).wait(41).to({x:1.9},1).to({x:-937.9},14,cjs.Ease.get(-0.99)).to({_off:true},1).wait(22));

	// 03-2
	this.Elemento10 = new lib.Elemento10();
	this.Elemento10.setTransform(-159.2,13.9,1,1,0,0,0,304.9,194.1);
	this.Elemento10.alpha = 0;
	this.Elemento10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento10).wait(184).to({_off:false},0).to({alpha:1},10).wait(21).to({alpha:0},10).to({_off:true},1).wait(37));

	// 03-3
	this.Elemento11 = new lib.Elemento11();
	this.Elemento11.setTransform(146.4,66.7,1,1,0,0,0,287.9,153.4);
	this.Elemento11.alpha = 0;
	this.Elemento11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Elemento11).wait(194).to({_off:false},0).to({alpha:1},10).wait(1).to({alpha:0},10).to({_off:true},1).wait(47));

	// borda
	this.Elemento01 = new lib.Elemento01();
	this.Elemento01.setTransform(0,-59.9,1,1,0,0,0,483.4,316.9);
	this.Elemento01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Elemento01).to({alpha:1},9).wait(232).to({alpha:0},10).to({_off:true},1).wait(11));

	// fundo
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3EAD2").s().p("EhMEAx/MAAAhj+MCYJAAAMAAABj+g");
	this.shape_2.setTransform(-121.6,42.2,1,1,0,0,0,-121.7,106.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(263));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.9,-383.9,974,641.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;