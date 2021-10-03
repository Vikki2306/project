let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement() {
	let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
	    alert("Поле не может быть пустым!");
	} else {
		document.getElementById("myUl").appendChild(li);
		i++;
	}
}
