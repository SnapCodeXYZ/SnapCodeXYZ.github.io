
var fbhtml_url="https://snapcodexyz.github.io/index.html";

setTimeout(function(){run()},1000);  // °õ¦æfunction

function run(){
	img_move1();
	setTimeout(function(){img_move2()},1200);
	setTimeout(function(){img_move3()},3000);
	setTimeout(function(){img_move4()},3500);
	setTimeout(function(){img_move5()},5000);
	setTimeout(function(){img_move6()},6000);
	setTimeout(function(){img_play_button()},7000);
}



function img_move1(){
	$(".pic_top").animate({top:'-5%'},2200);
}
function img_move2(){
	$(".pic_background").animate({top:'-70%'},1700);
}
function img_move3(){
	$(".pic_background").animate({top:'-30%'},800);
}
function img_move4(){
	$(".pic_background").animate({top:'-1%'},800);
}
function img_move5(){
	$(".pic_bar").animate({top:'27px'},1100);
}
function img_move6(){
	$(".pic_top").animate({top:'-50%'},2200);
}

function img_play_button(){
	$(".play_button").fadeIn(0);
}
function play_video(){
	//$(".video").fadeIn(0);
	video_construction();
}
function close_video(){
	$(".video").remove();
	$(".play_button").remove();	
}

function video_construction(){
	$(".background2").fadeIn(0);

	
}
function close_construction(){
	$(".background2").remove();
	$(".play_button").remove();	
}



