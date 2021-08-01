var txt = 'Загадано целое число от 1 до 100. Увас есть 10 попыток, чтобы отгадать его. Удачи!';
// Создание числа, которое нужно отгадать:
var randomNumber = Math.floor(99 * Math.random() + 1); 
var k = 0;
while (k < 10) {
	var text = prompt(txt);
	var number = Number(text);
	
	if ((Number.isInteger(number)) && ((0 < number) && (number <= 100)) && (number !== 0)) {
		if (number == randomNumber) {
		    alert('Вы выиграли! Ура!');
            break;				
	    } else {
		    if (number < randomNumber) {
		        alert('Мое число больше!');
				k++;
		        alert('У вас осталось ' + String(10 - k) + ' попыток');
		    } else {
			    alert('Мое число меньше!');
				k++;
		        alert('У вас осталось ' + String(10 - k) + ' попыток');
		    }
	    } 
	} else {
		alert('Введите ЧИСЛО от 1 до 100!'); 
    }
}
alert('Игра окончена!');
