// name of player1 and player 2 by prompt;

var player1_name = prompt("enter the name of player1");
var player2_name = prompt("enter the name of player2");

// player1 and player 2 symbols

var player1_symbol = '0';
var player2_symbol = 'x';

// player chance controller

var player_control = '0';

// control for all the 9 boxes

var $1 = document.getElementById("1");
var $2 = document.getElementById("2");
var $3 = document.getElementById("3");
var $4 = document.getElementById("4");
var $5 = document.getElementById("5");
var $6 = document.getElementById("6");
var $7 = document.getElementById("7");
var $8 = document.getElementById("8");
var $9 = document.getElementById("9");


// add event to the controls

$1.addEventListener('click',move_handle);
$2.addEventListener('click',move_handle);
$3.addEventListener('click',move_handle);
$4.addEventListener('click',move_handle);
$5.addEventListener('click',move_handle);
$6.addEventListener('click',move_handle);
$7.addEventListener('click',move_handle);
$8.addEventListener('click',move_handle);
$9.addEventListener('click',move_handle);

// console referecne

var consol = document.getElementById('consol');
var pl1 = document.getElementById('pl1');
var pl2 = document.getElementById('pl2');

// change content in player area

change_content(pl1,`<center><h2>${player1_name}(0)</h2></center>`);
change_content(pl2,`<center><h2>${player2_name}(x)</h2></center>`);


// function to change the content of player area;


function change_content(area,content = 0,append_flag=false){
	if(area === undefined){
		throw new Error;
	}
	if(append_flag){
		area.innerHTML += content;
		return true;
	}
	area.innerHTML = content;
	
}


// move handling function

function move_handle(e){
	if(e.target.innerHTML === '0' || e.target.innerHTML === 'x'){
		alert("can not click the item");
		return false;
	} 
	change_content(e.target,player_control);
	if(check_end()){
		change_content(consol,`<center><b>${check_end()==='0'?player1_name:player2_name}  won the match</b></center>`);
		remove_controls();
	}
	player_control = move_rotate(player_control);
}


// mvoe rotation function for players

function move_rotate(player_control){
	return player_control === '0'?'x':'0';
}



// check contdition for game end 

function check_end(){

	var one 	= $1.innerHTML;
	var two 	= $2.innerHTML;
	var three 	= $3.innerHTML;
	var four 	= $4.innerHTML;
	var five 	= $5.innerHTML;
	var six 	= $6.innerHTML;
	var seven 	= $7.innerHTML;
	var eight 	= $8.innerHTML;
	var nine 	= $9.innerHTML;

	if(one === two && one === three){
		return one;
	}

	if(four === five && four === six){
		return four;
	}

	if(seven === eight && seven === nine){
		return seven;
	}

	if(one === four && one === seven){
		return one;
	}

	if(two === five && two === eight){
		return two;
	}

	if(three === six && three === nine){
		return three;
	}

	if(one === five && one === nine){
		return one;
	}

	if(three === five && three === seven){
		return three;
	}

	else{
		return false;
	}

}



// remove event listeners from all the controls

function remove_controls(){

	$1.removeEventListener('click',move_handle);
	$2.removeEventListener('click',move_handle);
	$3.removeEventListener('click',move_handle);
	$4.removeEventListener('click',move_handle);
	$5.removeEventListener('click',move_handle);
	$6.removeEventListener('click',move_handle);
	$7.removeEventListener('click',move_handle);
	$8.removeEventListener('click',move_handle);
	$9.removeEventListener('click',move_handle);
}