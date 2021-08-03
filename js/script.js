const HEADING = 'Загадано целое число от 1 до 100. Увас есть 10 попыток, чтобы отгадать его. Удачи!';
// Создание числа, которое нужно отгадать:
const RANDOM_NUMBER = Math.floor(99 * Math.random() + 1); 

let i = 0;
while (i < 10) {
	let inputText = prompt(HEADING);
    let inputNumber = Number(inputText);
	
	if (inputText !== null) {
	    if ((Number.isInteger(inputNumber)) && ((0 < inputNumber) && (inputNumber <= 100)) && (inputText !== '')) {
		    if (inputNumber == RANDOM_NUMBER) {
		        alert('Вы выиграли! Ура!');
                break;				
	        } else {
		        if (inputNumber < RANDOM_NUMBER) {
		            alert('Мое число больше!');
				    i++;
		            alert('У вас осталось ' + (10 - i) + ' попыток');
		        } else {
			        alert('Мое число меньше!');
				    i++;
		            alert('У вас осталось ' + (10 - i) + ' попыток');
		        }
	        } 
	    } else {
		    alert('Введите ЧИСЛО от 1 до 100!'); 
        }
    } else {
	    break;
    }
}
alert('Игра окончена!');
