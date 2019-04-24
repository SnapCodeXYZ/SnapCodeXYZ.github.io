var question_num = 0;
var isClick = true;
var score = 0;
var leopard = 0;
var fish = 0;
var mouse = 0;
var rabbit = 0;
var sheep = 0;
var n = 0 ;
var pic_fin = 0;
var is_next_Scene = 0;
var audioDom = document.getElementById("audio_BGM");
var audioDom1 = document.getElementById("audio_sound1");
var audioDom2 = document.getElementById("audio_sound2"); 
var music = 1 ;  // 1是開音樂 2是關音樂

$( ".music_open,.music_mute" ).on('click', function(){	
	if( music == 1 ) {
		$('div.music_open').fadeIn(0);
		$('div.music_mute').fadeOut(0);
		audioDom.pause();
		music = 2 ;
	}
	else {
		$('div.music_open').fadeOut(0);
		$('div.music_mute').fadeIn(0);
		audioDom.play();
		music = 1 ;
	}
});

$('.button1 ,.button2' ).on('click', function(){

	if(isClick == true) {
		isClick = false;
		question_num = question_num+1;
		var $orgImg = $(this);
		
		$('div.panel1').fadeOut();
		$('div.panel2').fadeOut();
		$('div.panel3').fadeOut();
		$('div.panel4').fadeOut();
		$('div.panel5').fadeOut();
		$('div.panel6').fadeOut();
		$('div.panel7').fadeOut();
		$('div.panel8').fadeOut();
		
		if( music == 1 ) audioDom2.play();
		
		if ( question_num == 1 ) setTimeout(function(){question2()},1000);
		else if ( question_num == 2 ) {
			setTimeout(function(){q1_img_move4()},500);
			setTimeout(function(){q3_img_move1()},1300);
			setTimeout(function(){question3()},2500);
		}
		else if ( question_num == 3 ){
			$('.Q3_4').fadeOut(400);
			setTimeout(function(){q4_img_move1()},500);
			setTimeout(function(){q4_img_move2()},1800);
			setTimeout(function(){question4()},3800);
		}
		else if ( question_num == 4 ){
			$('.Q4_2').fadeOut(400);
			setTimeout(function(){q4_img_move3()},500);
			setTimeout(function(){q5_img_move1()},1000);
			setTimeout(function(){question5()},4200);
		}
		else if ( question_num == 5 ){
			setTimeout(function(){q5_item()},100);
			setTimeout(function(){q5_img_move3()},500);
			setTimeout(function(){q6_img_move1()},1300);
			setTimeout(function(){question6()},3200);
		}
		else if ( question_num == 6 ){
			setTimeout(function(){q6_item()},100);
			setTimeout(function(){q6_img_move3()},500);
			setTimeout(function(){q7_img_move1()},1300);
			setTimeout(function(){question7()},2800);
		}
		else if ( question_num == 7 ){
			setTimeout(function(){q7_item()},100);
			setTimeout(function(){q8_img_move1()},2000);
			setTimeout(function(){question8()},7100);
		}
		else if ( question_num == 8 ){
			setTimeout(function(){max_score(Math.max(leopard, fish, mouse, rabbit, sheep))},250);
		}
		
		setTimeout(function() {
			isClick = true;
		}, 3000);
	}
	console.log(leopard);
	console.log(fish);
	console.log(mouse);
	console.log(rabbit);
	console.log(sheep);

});



			

function loaded(){    // loaded 執行
	fadeOut_top();
	setTimeout(function(){run()},1500);  // 執行function
	pic_fin = 1 ;
}

setTimeout(function(){loading_fade()},500);  // loading

function loading_fade(){
	if ( pic_fin == 0 ){
		setTimeout(function(){fadeInOut_loading()},0);
		setTimeout(function(){loading_fade()},2100);

	}
	
}

function fadeInOut_loading()
{
	$("#loading_pic").fadeOut(1000) ;
	$("#loading_pic").fadeIn(1000) ;
}

function fadeOut_top()
{
	$("#top").fadeOut("slow") ;
}

function add_score(who,score){
	if ( who == 1 )   // 豹
		leopard = leopard + score ;	
	else if ( who == 2 )    // 金魚
		fish = fish + score ;
	else if ( who == 3 )    // 鼠
		mouse = mouse + score ; 
	else if ( who == 4 )   // 兔
		rabbit = rabbit + score ;
	else if ( who == 5 )   // 羊
		sheep = sheep + score ;	
}

function max_score(score){
	if ( leopard == score ) setTimeout(function(){window.location.href='https://eatssoyaoshou.000webhostapp.com/result_leopard.html' ;},1500);
	else if( fish == score ) setTimeout(function(){window.location.href='https://eatssoyaoshou.000webhostapp.com/result_fish.html' ;},1500);
	else if( mouse == score ) setTimeout(function(){window.location.href='https://eatssoyaoshou.000webhostapp.com/result_mouse.html' ;},1500);
	else if( rabbit == score ) setTimeout(function(){window.location.href='https://eatssoyaoshou.000webhostapp.com/result_rabbit.html' ;},1500);
	else if( sheep == score ) setTimeout(function(){window.location.href='https://eatssoyaoshou.000webhostapp.com/result_sheep.html' ;},1500);
}

function panel_fadeOut(){
	$('div.panel1').fadeOut();
	$('div.panel2').fadeOut();
	$('div.panel3').fadeOut();
	$('div.panel4').fadeOut();
	$('div.panel5').fadeOut();
	$('div.panel6').fadeOut();
	$('div.panel7').fadeOut();
	$('div.panel8').fadeOut();
}


function run(){
	q1_img_move1();

}


$( "*" ).on('click', function(){	

	if ( is_next_Scene == 1 ){		
		is_next_Scene = 2 ;	
		if( music == 1 ) {
			audioDom1.play();
			setTimeout(function(){audioDom.play();},300);	
		}
		setTimeout(function(){q1_img_move3()},1);			
	}
});


function q1_img_move1(){
	$(".Q1_1").animate({top:'68%'},1300);
	setTimeout(function(){q1_img_move2()},600);
	
}
function q1_img_move2(){
	$(".Q1_2").animate({top:'0%'},1800);
	$(".Q1_3").animate({top:'0%'},1800);
	$(".Q1_4").animate({top:'0%'},1800);
	setTimeout(function(){is_next_Scene = 1 ;},1500);
}


function q1_img_move3(){
	$(".Q1_2").animate({top:'63%',left:'-18%'},1300);
	$(".Q1_3").animate({top:'69%'},1300);
	$(".Q1_4").animate({top:'63%',left:'95%'},1300);
	$(".Q1_5").animate({top:'22%'},1300);
	$(".Q1_6").animate({top:'22%'},1300);
	$(".Q1_7").animate({top:'0%'},1300);
	$(".Q1_8").animate({top:'-7%'},1300);
	setTimeout(function(){question1()},1700);

}

function q1_img_move4(){
	$(".Q1_2").animate({top:'140%'},2500);
	$(".Q1_3").animate({top:'140%'},2500);
	$(".Q1_4").animate({top:'140%'},2500);
	$(".Q1_5").animate({left:'-130%'},1500);
	$(".Q1_6").animate({left:'140%'},1500);
	$(".Q1_7").animate({top:'-200%'},2500);
	$(".Q1_8").animate({top:'-100%'},1500);
}

function q3_img_move1(){
	$(".Q1_8").animate({top:'-5%'},700);
	$(".Q3_1").animate({top:'5%'},1300);
	$(".Q3_2").animate({top:'6%'},1300);
	$(".Q3_3").animate({top:'-1%'},1400);
	setTimeout(function(){q3_img_move2()},1200);
}

function q3_img_move2(){
	$('.Q3_4').fadeIn(400);
}

function q4_img_move1(){
	$(".Q1_8").animate({width:'140%'},1400);
	$(".Q3_1").animate({width:'160%',left:'-28%'},1400);
	$(".Q3_2").animate({width:'160%',left:'50%',top:'7%'},1400);
	$(".Q3_3").animate({width:'140%',left:'33%'},1400);
}

function q4_img_move2(){
	$('.Q4_1').fadeIn(600);
	setTimeout(function(){q4_img_move4()},800);
	$(".Q4_1").animate({left:'46%',top:'55%'},800);
}

function q4_img_move4(){
	$('.Q4_2').fadeIn(400);

}

function q4_img_move3(){
	$('.Q4_1').fadeOut(700);
	$('.Q1_8').fadeOut(1000);
	$(".Q3_1").animate({top:'40%',left:'-135%'},1200);
	$(".Q3_2").animate({top:'40%',left:'153%'},1200);
	$(".Q3_3").animate({top:'-20%',left:'50%'},1000);
}

function q5_img_move1(){
	$(".Q5_1").animate({top:'-15%'},1200);
	setTimeout(function(){q5_img_move2()},1000);
}

function q5_img_move2(){
	$(".Q5_2").animate({top:'55%',left:'0%'},1700);
	$(".Q5_3").animate({top:'55%',left:'58%'},1700);
}
function q5_img_move3(){
	$(".Q5_1").animate({top:'-150%'},900);
	$(".Q5_2").animate({top:'130%'},1200);
	$(".Q5_3").animate({top:'130%'},1200);
}

function q6_img_move1(){
	$(".Q6_1").animate({top:'0%'},900);
	setTimeout(function(){q6_img_move2()},400);
}
function q6_img_move2(){
	$(".Q6_2").animate({top:'52%',left:'64%'},1300);
}
function q6_img_move3(){
	$(".Q6_1").animate({top:'-150%'},900);
	$(".Q6_2").animate({top:'110%',left:'150%'},1200);
}
function q7_img_move1(){
	$(".Q7_1").animate({top:'0%'},900);
	
}
function q8_img_move1(){
	$(".Q8_1").fadeIn(2000);
	setTimeout(function(){q8_img_move2()},300);
	setTimeout(function(){q8_img_move3()},1800);
}
function q8_img_move2(){
	$(".Q8_2_1").animate({left:'0%'},1500);
	$(".Q8_2_3").animate({left:'30%'},4200);
	$(".Q8_2_4").animate({left:'0%'},3800);
	$(".Q8_3").animate({left:'20%'},1500);
	$(".Q8_4").animate({top:'45%'},1500);
	
}
function q8_img_move3(){
	$(".Q8_2_2").fadeIn(1500);
	setTimeout(function(){q8_img_move4()},500);
}
function q8_img_move4(){	
	$(".Q8_5").animate({top:'8%',left:'0%'},3000);
	
}


function q5_item(){
	$(".Q5_0").fadeIn(500);
	$(".Q5_0").animate({top:'-3%'},400);
	$(".Q5_0").animate({top:'74%',left:'40%'},1100);
}
function q6_item(){
	$(".Q6_0").fadeIn(500);
	$(".Q6_0").animate({top:'-3%'},400);
	$(".Q6_0").animate({top:'79%',left:'7%'},1100);
}
function q7_item(){
	$(".Q7_0").fadeIn(500);
	$(".Q7_0").animate({top:'-3%'},400);
	$(".Q7_0").animate({top:'83%',left:'-23%'},1100);
}


function question1()
{
    $('.panel1').fadeIn(800);
	
	//setTimeout(function(){question2()},1000);
}

function question2()
{
    $('.panel2').fadeIn(800);
	setTimeout(function() {isClick = true;}, 800);
}

function question3()
{
    $('.panel3').fadeIn(800);
}
function question4()
{
    $('.panel4').fadeIn(800);
}
function question5()
{
    $('.panel5').fadeIn(800);
}
function question6()
{
    $('.panel6').fadeIn(800);
}
function question7()
{
    $('.panel7').fadeIn(800);
}
function question8()
{
    $('.panel8').fadeIn(800);
}



