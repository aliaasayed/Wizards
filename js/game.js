var i=-1;
var Game_object =function(src_image)
{
    this.x_current;
    this.y_current;
    this.step_x=5;
    this.step_y=5;
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
    this.x_current=Math.floor(Math.random()*400)+1;
};
Game_object.prototype.ini_y_current = function()
{
 	  this.y_current=Math.floor(Math.random()*700)+1;
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
var Game_board=function(char,level_no,character)
{
    this.level;
    this.char=char;
    //this.timer;
    this.character;
    this.Game_object_arr =[];
    this.Set_level(level_no);
    this.Set_Game_object_arr();
    this.Prepare_Game_board();
    this.Start_Game_board();
    this.Set_character(char);
    this.Change_Game_board();
    this.End_Game_board= function(interval)
    {
        setTimeout(function () {
       
        clearInterval(interval);
      },10000)
    };
    this.Game_result();
}

Game_board.prototype.Set_character = function(char)
{
    this.character=new Image;
    if(char==1)
    {
      this.character.src="img/minion.png";
    }
    else if (char==2)
    {
      this.character.src="img/sinfor.png";
    }
    else
    {
      this.character.src="img/box.png";
    }
};
Game_board.prototype.Set_level = function(level_no)
{
    this.level=level_no;
};
Game_board.prototype.Set_Game_object_arr = function()
{
    var chars_num , boxes_o_num ;
    if (this.level ==1)
    {
        chars_num =2;
        boxes_o_num =5;
    }
    else if (this.level ==2)
    {
        chars_num =4;
        boxes_o_num =8;
    }
    else
    {
        chars_num =6;
        boxes_o_num =10;
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

    }
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
    if((xcurr>=445) || (xcurr<=0))
    {
      this.Game_object_arr[i].Set_step_x(-x);
  
    }
    if((ycurr>=770) || (ycurr<=0))
    {
      this.Game_object_arr[i].Set_step_y(-y);
    }
    this.Game_object_arr[i].Set_x_current(this.Game_object_arr[i].Get_x_current()+this.Game_object_arr[i].Get_step_x());
    this.Game_object_arr[i].Set_y_current(this.Game_object_arr[i].Get_y_current()+this.Game_object_arr[i].Get_step_y());

    (this.Game_object_arr[i].img).style.top =  this.Game_object_arr[i].Get_x_current() + 'px';
    (this.Game_object_arr[i].img).style.left = this.Game_object_arr[i].Get_y_current() + 'px';
 
};
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
  var char_img =document.getElementsByClassName('img1');
  var ch=this.char;
  for (var i = 0; i < char_img.length; i++) {
    char_img[i].onclick=function(e){
      if(ch==1)
      {
      e.target.src='img/minion.png';
    }
      else {
        e.target.src='img/sinfor.png';
      }
    }
  }
  var box_img =document.getElementsByClassName('img2')
  for (var i = 0; i < box_img.length; i++) {
    box_img[i].onclick=function()
    {
      alert("looooser");
    }
  }
}
var Board_1=new Game_board(1,1,1);
Board_1.Prepare_Game_board();
var id=setInterval(function(){Board_1.Start_Game_board()},1);
Board_1.End_Game_board(id);
