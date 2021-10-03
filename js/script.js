const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement() {
	const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const task = document.createTextNode(inputValue);
	li.appendChild(task);
	if (inputValue === '') {
	    alert("Поле не может быть пустым!");
	} else {
		document.getElementById("myUl").appendChild(li);
	}
}
