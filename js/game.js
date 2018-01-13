var sndflag=0;
var play=document.getElementById("play")
play.addEventListener("click", playFunction);

var help=document.getElementById("help")
help.addEventListener("click", helpFunction);

var sound=document.getElementById("sound");
sound.addEventListener("click", soundFunction);

var clicksnd = new Audio("music/Click2.mp3");
var snd = new Audio("music/gamepage.mp3");
window.onload = function() {
    snd.play();
}
snd.loop=true;
function playFunction() {
  clicksnd.play();
	document.getElementsByClassName('new_game')[0].style.display='none'
  document.getElementsByClassName('choose_character')[0].style.display='block'
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

/**********************************/
var i=-1;
var counter=0;
var level=0;
var lives=3;
var badge_counter=0;
/*Begin choose character js*/
var smurfs_Link=false;
var minions_Link=false;
var Imgs=document.getElementsByClassName("choose_char");
Imgs[0].addEventListener("click",clicked_func_s);
Imgs[1].addEventListener("click",clicked_func_m);
 function clicked_func_s()
 {
    smurfs_Link=true;
    document.getElementsByClassName('choose_character')[0].style.display="none";
    document.getElementsByClassName('map')[0].style.display="block";
    level_map();
 }
 function clicked_func_m()
 {
    minions_Link=true;
    document.getElementsByClassName('choose_character')[0].style.display="none";
    document.getElementsByClassName('map')[0].style.display="block";
    level_map();
 }
/*End choose character js*/

/*Begin map level js*/

function level_map(){
  //console.log("level_map");
  level++;
  var Board_1;
  var image=document.getElementById('ch');
 document.getElementById("content").innerHTML=""
 document.getElementById("live").innerHTML=""
  //console.log(minions_Link)
  if(minions_Link==true)
  {
    image.setAttribute("src","img/minion.png");
     Board_1=new Game_board(1,level);

  }
  else if(smurfs_Link==true)
  {
    image.setAttribute("src","img/sinfor.png");
     Board_1=new Game_board(2,level);

  }
  if(level==1)
  {
    setTimeout(function()
    {
      image.style.position = "absolute";
    	image.style.right="950px";
    },1000)


  }
  else if (level==2)
  {
    setTimeout(function()
    {
    	image.style.position = "absolute";
    	image.style.right="650px";
    },1000)

  }
  else if (level==3)
  {
    setTimeout(function()
    {
      image.style.position = "absolute";
      image.style.right="350px";
    },1000)

  }

 //counter=0
  setTimeout(function() {
  document.getElementsByClassName('map')[0].style.display="none";
  document.getElementById('header').style.display="block";
  document.getElementsByClassName('game')[0].style.display="block";
  Board_1.Prepare_Game_board();
  console.log(lives)
  var id=setInterval(function(){Board_1.Start_Game_board()},1);
  Board_1.Change_Game_board();
  Board_1.End_Game_board(id);
  Board_1.Game_result();
  Board_1.timer();
  Board_1.GetValueOfTimer();
  counter=0;
  
},2000)

}
/*End map level js*/
var Game_object =function(src_image)
{
    this.x_current;
    this.y_current;
    this.step_x=0;
    this.step_y=0;
    this.img;
    this.Set_step_x= function(step_x)
    {
        this.step_x=step_x;
    };
    this.Set_step_y= function(step_y)
    {
        this.step_y=step_y;
    };
    this.Set_x_current= function(xcurr)
    {
    	  this.x_current=xcurr;
    };
    this.Set_y_current=function(ycurr)
    {
    	  this.y_current=ycurr;
    };
    this.ini_x_current();
    this.ini_y_current();
    this.Set_image(src_image);
    this.Get_x_current();
    this.Get_y_current();
    this.Get_step_x();
    this.Get_step_y();
    this.Get_image();
}

Game_object.prototype.ini_x_current = function()
{
    this.x_current=Math.floor(Math.random()*(550-400))+400;
};
Game_object.prototype.ini_y_current = function()
{
 	  this.y_current=Math.floor(Math.random()*(1070-500))+500;
};
Game_object.prototype.Set_image = function(src_image)
{
    this.img= new Image ;
    (this.img).src=src_image;
    if(src_image=="img/box.png")
    {
      (this.img).className="img img2";
    }
    else
    {
      (this.img).className="img img1";
    }
};
Game_object.prototype.Get_step_x = function()
{
    return this.step_x;
};
Game_object.prototype.Get_step_y = function()
{
    return this.step_y;
};
Game_object.prototype.Get_image = function()
{
    return this.img;
};
Game_object.prototype.Get_x_current = function()
{
    return this.x_current;
};
Game_object.prototype.Get_y_current = function()
{
    return this.y_current;
};
var Game_board=function(char,level_no)
{
    this.level;
    this.choosen_character;
    this.char=char;
    this.Game_object_arr =[];
    this.Set_level(level_no);
    this.Set_Game_object_arr();
    this.Set_lives =function(lives){
      this.lives=lives
    }
    this.Set_lives_image(char);
    this.Get_character=function(){ return this.choosen_character};
    this.Get_lives=function(){
      return this.lives;
    };
    this.End_Game_board= function(interval)
    {
        setTimeout(function () {
        clearInterval(interval);
      },12000)
    };
}

Game_board.prototype.Set_lives_image = function(char)
{
  var li=document.getElementById("live");
  for(var j=0;j<lives;j++)
  {
    this.choosen_character=new Image;
    (this.choosen_character).className="lives";
    if(char==1)
    {
      this.choosen_character.src="img/minion.png";
    }
    else
    {
      this.choosen_character.src="img/sinfor.png";
    }

        li.appendChild(this.choosen_character)

    }

};
Game_board.prototype.Set_level = function(level_no)
{
    this.level=level_no;
};
Game_board.prototype.Set_Game_object_arr = function()
{
  console.log("inside srt game board araay")
    var chars_num , boxes_o_num ;
    if (this.level ==1)
    {
        chars_num =2;
        boxes_o_num =4;
        console.log("level 1 set")
    }
    else if (this.level ==2)
    {
        this.Game_object_arr=[]
        chars_num =3;
        boxes_o_num =5;
        console.log("level 2 set")

    }
    else
    {
        this.Game_object_arr=[]
        chars_num =4;
        boxes_o_num =6;


    }
    for (var i=0;i<chars_num;i++)
    {
        if(this.char==1)
        {
          var game_obj = new Game_object("img/minion.png");
        }
        else
        {
          var game_obj = new Game_object("img/sinfor.png");
        }
        this.Game_object_arr.push(game_obj);
    }

    for (var i=0;i<boxes_o_num;i++)
    {
        var game_obj = new Game_object("img/box.png");
        this.Game_object_arr.push(game_obj);
    }
};
Game_board.prototype.Prepare_Game_board = function()
{
    var content=document.getElementById("content");

    for(var i=0;i<this.Game_object_arr.length;i++)
    {
       content.appendChild(this.Game_object_arr[i].Get_image());

      if(this.level==1)
      {
        console.log("level 1 prepare");
         this.Game_object_arr[i].Set_step_x(5)
       this.Game_object_arr[i].Set_step_y(5)
      }
      else if(this.level==2)
      {
        console.log("level 2 prepare");
         this.Game_object_arr[i].Set_step_x(7)
       this.Game_object_arr[i].Set_step_y(7)
      }
      else
      {
        this.Game_object_arr[i].Set_step_x(9)
       this.Game_object_arr[i].Set_step_y(9)

      }

    }
    counter=0;
};
Game_board.prototype.Start_Game_board = function()
{
    i++;
    if(i>=this.Game_object_arr.length)
    {
      i=0;
    }
    var xcurr=this.Game_object_arr[i].Get_x_current();
    var ycurr=this.Game_object_arr[i].Get_y_current();

    var x=this.Game_object_arr[i].Get_step_x();

    var y=this.Game_object_arr[i].Get_step_y();
    if((xcurr>=550) || (xcurr<=10))
    {
      this.Game_object_arr[i].Set_step_x(-x);

    }
    if((ycurr>=1075) || (ycurr<=230))
    {
      this.Game_object_arr[i].Set_step_y(-y);
    }
    this.Game_object_arr[i].Set_x_current(this.Game_object_arr[i].Get_x_current()+this.Game_object_arr[i].Get_step_x());
    this.Game_object_arr[i].Set_y_current(this.Game_object_arr[i].Get_y_current()+this.Game_object_arr[i].Get_step_y());

    (this.Game_object_arr[i].img).style.top =  this.Game_object_arr[i].Get_x_current() + 'px';
    (this.Game_object_arr[i].img).style.left = this.Game_object_arr[i].Get_y_current() + 'px';

};
Game_board.prototype.timer=function()
{
    var Total_Time=new Date();
    setTimeout(function(){
    Total_Time.setMinutes(1,59,0);
    var stop=false;
    var startTime=new Date().getTime();
    var time_difference=setInterval(
    function(){
    var currentTime=new Date().getTime();
    var difference=currentTime-startTime;
    var minutes=Math.floor((difference%(1000*60*60)/(1000*60)));
    var seconds=Math.floor((difference%(1000*60))/1000);
    var Minutes_countDown=(Total_Time.getMinutes()-minutes);
    var seconds_countDown=(Total_Time.getSeconds()-seconds);
    var zero_char="";
    if(seconds_countDown<10)
    {
       zero_char="0";
    }
    document.getElementById("timer").innerHTML="timer: 0"+Minutes_countDown+":"+zero_char+seconds_countDown;
    if(Minutes_countDown===0 && seconds_countDown===0)
    {stop=true;}
    if(stop==true)
    {
    clearInterval(time_difference);
    }
    });
    },10000);
}

Game_board.prototype.GetValueOfTimer=function()
{
    var stop_flag=false;
    var TimeInterval=setInterval(function(){
    var Timer_Value=document.getElementById("timer").innerHTML;
    Split_TimeValues=Timer_Value.split(":");
    //console.log(Split_TimeValues[2]);
    if(counter==2 && parseInt(Split_TimeValues[1])==1 &&parseInt(Split_TimeValues[2])>=30)
    {
    stop_flag=true;
    //alert("you have got a faster badge");
    }
    if(stop_flag==true)
    {
    clearInterval(TimeInterval);
    }
    },1000);
}
Game_board.prototype.Change_Game_board = function()
{
  var char_img =document.getElementsByClassName('img1')
  setTimeout(function(){
    for (var i = 0; i < char_img.length; i++) {
      char_img[i].src='img/box.png';
    }
  },7000)
}
Game_board.prototype.Game_result = function()
{
 // console.log("Game_result");
  var char_img =document.getElementsByClassName('img1');
  var ch=this.char;
  for (var i = 0; i < char_img.length; i++) {
    char_img[i].onclick=function(e){
      if(ch==1)
      {
      e.target.src='img/minion.png';
      counter++;

      badge_counter++;
      console.log(counter);
      cou(counter)

    }
      else {
        e.target.src='img/sinfor.png';
        counter++;
        badge_counter++;
        cou(counter)
      }
    }

  }
  function cou(counter)
  {

  if(counter==2 && this.level==1)
  {
    document.getElementsByClassName('game')[0].style.display="none"
    document.getElementById('header').style.display="none"
    if(badge_counter==2)
    {
      console.log("inside badge2")
      var modal = document.getElementById('simpleModal');
      //var closeBtn = document.getElementById('closeModalBtn');
      modal.style.display = 'block';
      //closeBtn.addEventListener('click', function () {
      setTimeout(function(){
        modal.style.display = 'none';
        document.getElementsByClassName('map')[0].style.display="block"
        level_map();
      },1000)
    }
    else{
      document.getElementsByClassName('map')[0].style.display="block"
      level_map();
    }
  }
  if(counter==3 && this.level==2)
  {
    document.getElementsByClassName('game')[0].style.display="none"
    document.getElementById('header').style.display="none"
    document.getElementsByClassName('map')[0].style.display="block"
    level_map();

  }
  if(counter==4 && this.level==3)
  {
    document.getElementsByClassName('game')[0].style.display="none"
    document.getElementById('header').style.display="none"
    if(lives==3)
    {
      var modal2 = document.getElementById('simpleModal2');
      modal2.style.display = 'block';
      setTimeout(function(){
      modal2.style.display = 'none';
      level=0;
      level_map();
      },1000);
    }
  }
}
  var box_img =document.getElementsByClassName('img2')
  var lives_images=document.getElementById("live")
  console.log(lives_images)
  for (var i = 0; i < box_img.length; i++) {
    box_img[i].onclick=function()
    {
      lives=lives-1;
    
      if(lives==0)
      {
        //window.location.assign('gamefinished.html')
        document.getElementsByClassName('game')[0].style.display="none"
       document.getElementById('header').style.display="none"
        var modal5 = document.getElementById('gameover');
         modal5.style.display = 'block';
        setTimeout(function(){
        modal5.style.display = 'none';
        smurfs_Link=false;
        minions_Link=false;
        document.getElementsByClassName('choose_character')[0].style.display="block"
        level=0;
        lives=3;
        
      },3000)

      }
      lives_images.removeChild(lives_images.lastChild);
      if(badge_counter==2)
      {
        badge_counter=2
      }
      else
      {
        badge_counter=0
      }
    }
  }
}
