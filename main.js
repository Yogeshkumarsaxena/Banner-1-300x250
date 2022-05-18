function init() {
	frame1Animation();
}

 function frame1Animation() {
	TweenLite.set(["#bg1","#bg2","#cityScape","#theTanejaGroup","#comboLogo","#copy1","#sun","#car1","#car2","#clouds1","#clouds2","#clouds3"], { autoAlpha:1});
 
	TweenLite.to("#car1", 8, { x:300, ease:Power0.easeNone});
	TweenLite.to("#car2", 6, { x:300, ease:Power0.easeNone});
	TweenLite.to("#clouds1", 15, { x:-300, ease:Power0.easeNone});
	TweenLite.to("#clouds2", 12, { x:-300, ease:Power0.easeNone});
	TweenLite.to("#clouds3", 13, { x:-300, ease:Power0.easeNone});
	TweenLite.delayedCall(2.5, frame2Amination);
	}

	function frame2Amination(){
		TweenLite.to(["#bg1","#theTanejaGroup","#sun","#cityScape","#copy1"], 0.5, { alpha:0, ease:Power1.easeOut});
		TweenLite.to(["#cityScape2","#copy2","#clouds4","#clouds5","#clouds6"], 0.5, { autoAlpha:1, ease:Power1.easeOut, delay:0.5, force3D:true} );
		TweenLite.from("#clouds4", 15, { x:300, ease:Power1.easeOut});
		TweenLite.from("#clouds5", 12, { x:300, ease:Power1.easeOut});
		TweenLite.from("#clouds6", 13, { x:300, ease:Power1.easeOut});
		TweenLite.delayedCall( 3, frame3Animation)
	}
	function frame3Animation() {
		TweenLite.set(["#clouds1","#clouds2","#clouds3"], { alpha:0});

		TweenLite.to(["#bg2","#cityScape2","#copy2","comboLogo"], 0.5, { alpha:0, ease:Power1.easeOut});
		TweenLite.to(["#comboLogo2","#bg3"], 0.5, { autoAlpha:1, ease:Power1.easeOut, delay:0.5, force3D:true} );
		TweenLite.to(["#copy3"], 0.5, { autoAlpha:1, ease:Power1.easeOut, delay:1, force3D:true} );
		TweenLite.to(["#cta"], 0.5, { autoAlpha:1, ease:Power1.easeOut, delay:1.5, force3D:true} );
		TweenLite.delayedCall( 8.5, resetFrame);
	}
	var loop=0;
	function resetFrame(){
	
		if( loop<1)
		{
			loop++;
			TweenLite.to(["#clouds4","#clouds5","#clouds6","#comboLogo2","#bg3","#copy3","#cta"],0.5,{opacity:0});
    		TweenLite.set(["#car1","#car2","#clouds1","#clouds2","#clouds3"],{x:0, opacity:0});
			TweenLite.delayedCall(0.5,frame1Animation)
		}
	}	

document.getElementById("mainExit").addEventListener('click', cta);
function cta(){
	window.open(clickTag, "_blank");
}