(function play() {
	// Подсчет количества попыток:
    let i = 1;
    // Создание числа, которое нужно отгадать:
    const RANDOM_NUMBER = Math.floor(99 * Math.random() + 1);
	
	// Функция перезапуска игры
    document.getElementById("restart").style.visibility = "collapse";
    document.getElementById("restart").onclick = function() {
        document.getElementById("statements").innerHTML = ('');
        document.getElementById("guessField").value = ('');
        play();
	}

    document.getElementById("submitGuess").onclick = function() {
		
	    // Функция, подсчитывающая попытки:
        let inputNumber = +document.getElementById("guessField").value;
		if (i > 10) {
			document.getElementById("statements").innerHTML = ('Игра окончена. Для того, чтобы сыграть снова, нажмите кнопку "Перезапустить игру" ');
            document.getElementById("restart").style.visibility = "visible";
			return;  
        } else {
            checkNumber(inputNumber);
        }	
    }
    
	// Функция, определяющая верное ли число введено в поле:
    function checkNumber(num) {
        if ((Number.isInteger(num)) && ((0 < num) && (num <= 100)) && (num !== '')) {	
            report(num);   
	    } else {
	        document.getElementById("statements").innerHTML = ('Введите число от 1 до 100');
        }
    }

    // Функция, проверяющая совпадение веденного числа с загаданным:
    function report(number) {		

	    if (number == RANDOM_NUMBER) {
            document.getElementById("statements").innerHTML = ('Вы выиграли! Ура! Для того, чтобы сыграть снова, нажмите кнопку "Перезапустить игру"'); 
			document.getElementById("restart").style.visibility = "visible";
			return;
	    } 
        
	    if (number < RANDOM_NUMBER) {
		    document.getElementById("statements").innerHTML = ('Мое число больше! У вас осталось ' + (10 - i) + ' попыток');
		    i++;
	    } else {
		    document.getElementById("statements").innerHTML = ('Мое число меньше! У вас осталось ' + (10 - i) + ' попыток');
		    i++;
	    }       
	}
}());
