if (true) {
	// Создание числа, которое нужно отгадать:
    const RANDOM_NUMBER = Math.floor(99 * Math.random() + 1);

    // Подсчет количества попыток:
    let i = 1;
		  
    document.getElementById("submitGuess").onclick = function() {
	
        let inputNumber = +document.getElementById("guessField").value;

        if (i > 10) {
            alert('Игра окончена!');
	        return;
        }

        check(inputNumber);
    }


    function check(num) {
        if ((Number.isInteger(num)) && ((0 < num) && (num <= 100)) && (num !== '')) {	
            if (num == RANDOM_NUMBER) {
		        document.getElementById("statements").innerHTML = ('Вы выиграли! Ура!');
                i = Infinity;		
	        } else {
		        if (num < RANDOM_NUMBER) {
		            document.getElementById("statements").innerHTML = ('Мое число больше! У вас осталось ' + (10 - i) + ' попыток');
			        i++;
		        } else {
			        document.getElementById("statements").innerHTML = ('Мое число меньше! У вас осталось ' + (10 - i) + ' попыток');
			        i++;
		        }  
	        } 
	    } else {
		    document.getElementById("statements").innerHTML = ('Введите число от 1 до 100');
        }
    }
}
