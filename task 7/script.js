window.addEventListener('load', () => {
    const workPlace = document.querySelector(".form");
    const input = document.querySelector(".form__input_todo");
    const done = document.querySelector(".todo_list");

    workPlace.addEventListener('submit', (e) => {
        e.preventDefault();
        const workTodo = input.value;
        input.value ="";

        if (workTodo.trim().length === 0) {
            alert("Введите текст");
            return;
        } else {
        const done_work = document.createElement("div");
        done_work.classList.add("todo_item");
        done_work.innerText=workTodo;
        done.appendChild(done_work);

        done_work.addEventListener('click', () => {
            done.removeChild(done_work);
        });
        }
    })
})