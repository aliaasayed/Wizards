var flags_Array=localStorage.getItem("storageName");
var Splited_Arr=flags_Array.split(",");
var counter=0;
console.log(Splited_Arr[0]);
console.log(Splited_Arr[1]);
var image=document.images[3];
var Character=new Image();
Character.onload=function(){
 image.src=this.src;

}
if(Splited_Arr[0]==="true")
{
Character.src="img/sinfor.png";
}
else if(Splited_Arr[1]==="true")
{
Character.src="img/minion.png";
}

var Levels_plus_character=document.getElementsByTagName("img");
//for(var i=0;i<3;i++)
//{
Levels_plus_character[0].addEventListener("click",move_1);
//}
function move_1()
{      image.style.position = "absolute";
	//if(counter==0)
	//{
	
	image.style.right="950px";
       /* }
    else if(counter==1)
    {
    	image.style.right="650px";
    }
    else if(counter==2)
    {
      image.style.right="350px";
    }
counter++;*/

}



Levels_plus_character[1].addEventListener("click",move_2);

function move_2()
{
	image.style.position = "absolute";
	image.style.right="650px";
}

Levels_plus_character[2].addEventListener("click",move_3);

function move_3()
{
	image.style.position = "absolute";
	image.style.right="350px";
}
