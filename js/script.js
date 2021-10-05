function newElement() {
	const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const task = document.createTextNode(inputValue);
	li.appendChild(task);
	if (inputValue === '') {
	    alert("Поле не может быть пустым!");
	} else {
		document.getElementById("myOl").appendChild(li);
	}
	
	document.getElementById('myInput').value = "";
    const span = document.createElement('SPAN');
    const txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
	
		
    const close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
	    close[i].onclick = function () {
		    let div = this.parentElement;
		    div.style.display = "none";
	    }
    }
}
	
const list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);
