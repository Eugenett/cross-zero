var cells = document.querySelectorAll('#place td');
var currentGamer = 'X';
var place = document.getElementById('place');
resetGame();
for(var i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', nextStep);
}

function nextStep() {
	this.innerHTML = currentGamer;

	if(currentGamer == 'X') {
		currentGamer = 'O';
	}else {
		currentGamer = 'X';
	}
	this.removeEventListener('click', nextStep);
	chekWin(cells);
}


function chekWin(items) {

	var winCombo = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,4,8],
	[2,4,6],
	[1,4,7],
	[0,3,6],
	[2,5,8]
]
	for(var i = 0; i < winCombo.length; i++) {
		var luckyCell = winCombo[i];
		if(
			cells[luckyCell[0]].innerHTML == cells[luckyCell[1]].innerHTML &&
			cells[luckyCell[1]].innerHTML == cells[luckyCell[2]].innerHTML &&
			cells[luckyCell[0]].innerHTML != ''
			) {
			alert('Победа!');
			endOfGame(cells);		
		}
	}
}

function endOfGame(items) {
	for(var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', nextStep);
	}
}

function resetGame() {
	var resetBtn = document.createElement('button');
	resetBtn.innerHTML = 'Еще разок';
	resetBtn.className += 'reset-btn';
	place.appendChild(resetBtn);
	resetBtn.addEventListener('click', function() {
		location.reload(true);
	})
}