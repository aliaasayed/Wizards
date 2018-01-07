var i=-1
var id
var xarr=[]
var yarr=[]
var xpos=[]
var ypos=[]
for(var k=0;k<7;k++)
{
  xpos[k]=5
  ypos[k]=5
}
for(var j=0;j<7;j++)
{
  xarr[j]=Math.floor(Math.random()*370);
  yarr[j]=Math.floor(Math.random()*690);
}
function play() {
  i++
  if(i>7)
  {
    i=0
  }
    var object = document.getElementsByClassName('img');
    var div = document.getElementsByClassName('game');
    if(xarr[i]>=370 || xarr[i]<=0)
    {
      xpos[i]=-xpos[i]
    }
    if(yarr[i]>=690 || yarr[i]<=0)
    {
      ypos[i]=-ypos[i]
    }
    draw();
    object[i].style.top =  xarr[i] + 'px';
    object[i].style.left = yarr[i] + 'px';
  }
function draw()
{
  xarr[i]+=xpos[i]
  yarr[i]+=ypos[i]
}

function end()
{
  clearInterval(id);
  var node = document.createElement("span");
  var textnode = document.createTextNode("timer : ");
  node.appendChild(textnode);
  document.getElementById("header").appendChild(node);
  /*var h2 = document.createElement("h2");
  var h2text = document.createTextNode("Goooood");
  h2.appendChild(h2text);
  var div= document.getElementsByClassName("g")*/
  var minion_event  = document.getElementsByClassName("img1")
  for (var m = 0; m < minion_event.length; m++)
  {
    minion_event[m].onclick=function(e)
    {
      e.target.src="img/minion.png"
    }
  }
}
function change()
{
  var minion = document.getElementsByClassName('img1');
  for (var a = 0; a < minion.length; a++) {
    minion[a].src="img/box.png"
  }
}
id=setInterval(play,1);
setTimeout(change,7000);
setTimeout(end,10000);
