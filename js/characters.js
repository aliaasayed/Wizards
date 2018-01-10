
var smurfs_Link=false;
var minions_Link=false;
var flags_arr=[];
var Imgs=document.getElementsByTagName("img");


	
   Imgs[0].addEventListener("click",clicked_func_s);
   Imgs[1].addEventListener("click",clicked_func_m);
   setInterval(Set_flagsArr,1000);
 function clicked_func_s()
 {
	
    smurfs_Link=true;
    minions_Link=false;
Set_flagsArr();
window.location.assign("level map.html");
    //alert(smurfs_Link);
    //alert(minions_Link);
 }
 function clicked_func_m()
 {
	smurfs_Link=false;
    minions_Link=true;
Set_flagsArr();
window.location.assign("level map.html");
    //alert(smurfs_Link);
    //alert(minions_Link);
 }


	function Set_flagsArr()
	{
		flags_arr=[];
	flags_arr.push(smurfs_Link);
	flags_arr.push(minions_Link);
	localStorage.setItem("storageName",flags_arr);
        }






	
