// Создание числа, которое нужно отгадать:
const RANDOM_NUMBER = Math.floor(99 * Math.random() + 1); 
		  
// Подсчет количества попыток:
let i = 1;
		  
document.getElementById("submitGuess").onclick = function() {

    let inputText = document.getElementById("guessField").value;
    let inputNumber = Number(inputText);
    if (i > 10) {
        alert('Игра окончена!)');
	    return;
    }
			 
	if ((Number.isInteger(inputNumber)) && ((0 < inputNumber) && (inputNumber <= 100) && (inputNumber !== ''))) {
        if (inputNumber == RANDOM_NUMBER) {
		    document.getElementById("statements").innerHTML = ('Вы выиграли! Ура!');
			i = 11; 
	    } else {
		    if (inputNumber < RANDOM_NUMBER) {
				document.getElementById("statements").innerHTML = ('Мое число больше! У вас осталось ' + (10 - i) + ' попыток');
				i++;
		    } else {
				document.getElementById("statements").innerHTML = ('Мое число меньше! У вас осталось ' + (10 - i) + ' попыток');
				i++;
		    }  
	    } 
	} else {
		document.getElementById("statements").innerHTML = ('Введите ЧИСЛО от 1 до 100!');
	}
}

