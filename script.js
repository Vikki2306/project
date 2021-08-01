const HEADING = 'Загадано целое число от 1 до 100. Увас есть 10 попыток, чтобы отгадать его. Удачи!';
// Создание числа, которое нужно отгадать:
const RANDOM_NUMBER = Math.floor(99 * Math.random() + 1); 

let i = 0;
while (i < 10) {
	let input_text = prompt(HEADING);
    let input_number = Number(input_text);
	
	if (input_text !== null) {
	    if ((Number.isInteger(input_number)) && ((0 < input_number) && (input_number <= 100)) && (input_text !== '')) {
		    if (input_number == RANDOM_NUMBER) {
		        alert('Вы выиграли! Ура!');
                break;				
	        } else {
		        if (input_number < RANDOM_NUMBER) {
		            alert('Мое число больше!');
				    i++;
		            alert('У вас осталось ' + String(10 - i) + ' попыток');
		        } else {
			        alert('Мое число меньше!');
				    i++;
		            alert('У вас осталось ' + String(10 - i) + ' попыток');
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
