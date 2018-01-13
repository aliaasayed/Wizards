var sndflag=0;
var sound=document.getElementById("sound");
sound.addEventListener("click", soundFunction);

var clicksnd = new Audio("music/Click2.mp3");
var snd = new Audio("music/gamestartfinished.mp3");

window.onload = function() {
    snd.play();
}
snd.loop=true;
function soundFunction(){
	clicksnd.play();
	if(sndflag===0)
	{
		snd.pause();
	    sound.innerHTML='<img src="img/nosound.png" />';
	    sndflag=1;
	}
	else if (sndflag===1)
	{
		snd.play();
	    sound.innerHTML='<img src="img/sound.png" />';
	    sndflag=0;
	}
}