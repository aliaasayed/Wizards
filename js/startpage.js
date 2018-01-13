var sndflag=0;

var clicksnd = new Audio("music/Click2.mp3");
var snd = new Audio("music/startpage.mp3");
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
function startfunction()
{
	clicksnd.play();
    startdiv.innerHTML='<img src="img/loading.gif" height="100" width="350" />';
    setTimeout(loadfunction,5000);
}
function loadfunction()
{
	window.location.href="game.html";
}
var startdiv=document.getElementById("startdiv")
var start=document.getElementById("start")
start.addEventListener("click", startfunction);
var sound=document.getElementById("sound");
sound.addEventListener("click", soundFunction);
