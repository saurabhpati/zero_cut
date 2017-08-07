const RESULT_COLOR_HEX = '#009688';
const DRAW_COLOR_HEX = '#d3d3d3';

// img reference
var img = document.querySelector('.he');

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
$1.addEventListener('click', move_handle);
$2.addEventListener('click', move_handle);
$3.addEventListener('click', move_handle);
$4.addEventListener('click', move_handle);
$5.addEventListener('click', move_handle);
$6.addEventListener('click', move_handle);
$7.addEventListener('click', move_handle);
$8.addEventListener('click', move_handle);
$9.addEventListener('click', move_handle);

// console referecne
var consol = document.getElementById('consol');
var pl1 = document.getElementById('pl1');
var pl2 = document.getElementById('pl2');

// change content in player area
change_content(pl1,`<center><h2>${player1_name}(0)</h2></center>`);
change_content(pl2,`<center><h2>${player2_name}(x)</h2></center>`);

// function to change the content of player area;
function change_content(area, content = 0, append_flag = false) {
	if (area === undefined) {
		throw new Error;
	}
	if (append_flag) {
		area.innerHTML += content;
		return true;
	}
	area.innerHTML = content;

}

// move handling function
function move_handle(e) {
	if (e.target.innerHTML === '0' || e.target.innerHTML === 'x') {
		alert("can not click the item");
		return false;
	}
	change_content(e.target, player_control);
	var result = check_end();

	if (result && result.player) {
		var winner = result.player === 'none' ? 'No one' : result.player; 
		
		change_content(consol, `<center><b>${winner} won the match</b></center>`);
		change_cell_background(result.case);
		remove_controls();
	}

	player_control = move_rotate(player_control);
}

// move rotation function for players
function move_rotate(player_control) {
	return player_control === '0' ? 'x' : '0';
}

// check contdition for game end 
function check_end() {

	var one = $1.innerHTML;
	var two = $2.innerHTML;
	var three = $3.innerHTML;
	var four = $4.innerHTML;
	var five = $5.innerHTML;
	var six = $6.innerHTML;
	var seven = $7.innerHTML;
	var eight = $8.innerHTML;
	var nine = $9.innerHTML;

	if (one === two && one === three) {
		return { case: 1, player: one };
	}

	if (four === five && four === six) {
		return { case: 2, player: four };
	}

	if (seven === eight && seven === nine) {
		return { case: 3, player: seven };
	}

	if (one === four && one === seven) {
		return { case: 4, player: one };
	}

	if (two === five && two === eight) {
		return { case: 5, player: eight };
	}

	if (three === six && three === nine) {
		return { case: 6, player: six };
	}

	if (one === five && one === nine) {
		return { case: 7, player: nine };
	}

	if (three === five && three === seven) {
		return { case: 8, player: five };
	}

	// Case of draw.
	if (one && two && three && four && five && six && seven && eight && nine) {
		return {case: 9, player: 'none'};
	}

	else {
		return false;
	}

}

// remove event listeners from all the controls
function remove_controls() {

	$1.removeEventListener('click', move_handle);
	$2.removeEventListener('click', move_handle);
	$3.removeEventListener('click', move_handle);
	$4.removeEventListener('click', move_handle);
	$5.removeEventListener('click', move_handle);
	$6.removeEventListener('click', move_handle);
	$7.removeEventListener('click', move_handle);
	$8.removeEventListener('click', move_handle);
	$9.removeEventListener('click', move_handle);
}

// Change the background if a player wins indicating the won row/column.
// In case of a draw, change the color of the entre table.
function change_cell_background(a) {
	switch (a) {
		case 1:
			$1.style.background = $2.style.background = $3.style.background = RESULT_COLOR_HEX;
			break;
		case 2:
			$4.style.background = $5.style.background = $6.style.background = RESULT_COLOR_HEX;
			break;
		case 3:
			$7.style.background = $8.style.background = $9.style.background = RESULT_COLOR_HEX;
		case 4:
			$1.style.background = $4.style.background = $7.style.background = RESULT_COLOR_HEX;
			break;
		case 5:
			$2.style.background = $5.style.background = $8.style.background = RESULT_COLOR_HEX;
			break;
		case 6:
			$3.style.background = $6.style.background = $9.style.background = RESULT_COLOR_HEX;
			break;
		case 7:
			$1.style.background = $5.style.background = $9.style.background = RESULT_COLOR_HEX;
			break;
		case 8:
			$3.style.background = $5.style.background = $7.style.background = RESULT_COLOR_HEX;
			break;
		case 9: 
			$1.style.background = $3.style.background = $2.style.background = $4.style.background = 
			$5.style.background = $6.style.background = $7.style.background = $8.style.background = 
			$9.style.background = DRAW_COLOR_HEX; 
	}
}
