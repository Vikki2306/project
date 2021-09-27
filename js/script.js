let tasks = [];
document.getElementById("submitTask").onclick = function() {
    let task = document.getElementById("addTask").value;

    if (task !== '') {
		tasks.push(task);
		let list = tasks.join('<br>');
		document.getElementById("statements").innerHTML = (list);
		document.getElementById("addTask").value = ('');
    }
}
