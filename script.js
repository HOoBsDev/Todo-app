let items = JSON.parse(localStorage.getItem('todos') || '[]')

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(items))
}

function renderList() {
    const List = document.getElementById("list")
    List.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        List.innerHTML += `<li><h3>${items[i].title}</h3><p>${items[i].details}</p><button onclick="deleteTodo(${i})">Delete</button></li>`
    }
}

function addTodo() {
    const Title = document.getElementById("title").value
    const Details = document.getElementById("details").value
    if (!Title || !Details) {
        alert("please fiil the form")
    } else {
        const item = {
            title: Title,
            details: Details
        }
        items.push(item)
        saveTodos()
        renderList()

        document.getElementById("title").value = ""
        document.getElementById("details").value = ""
    }
}

function deleteTodo(index) {
    items.splice(index, 1)
    saveTodos()
    renderList()
}
document.addEventListener('DOMContentLoaded', function () {
    renderList()
})
