var sndflag=0;
var play=document.getElementById("play")
play.addEventListener("click", playFunction);

var help=document.getElementById("help")
help.addEventListener("click", helpFunction);

var sound=document.getElementById("sound");
sound.addEventListener("click", soundFunction);

var clicksnd = new Audio("music/Click2.mp3");
var snd = new Audio("music/Fantasy_Game_Background_Looping.mp3");
window.onload = function() {
    snd.play();
}
function playFunction() {
	clicksnd.play();
    //window.location = "http://www.google.com/";
}
function helpFunction() {
	clicksnd.play();
   // window.location = "http://www.youtube.com/";
}
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