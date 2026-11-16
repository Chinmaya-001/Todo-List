const todoForm = document.getElementById("todoForm");
const textField = document.getElementById("textField");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = textField.value.trim();
    if (!task) {
        textField.focus();
        return;
    }

    const item = document.createElement("li");
    item.className = "todo-item";

    const taskText = document.createElement("span");
    taskText.className = "todo-text";
    taskText.textContent = task;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.className = "complete-button";
    completeButton.textContent = "✓";
    completeButton.setAttribute("aria-label", `Mark "${task}" as complete`);
    completeButton.addEventListener("click", () => {
        const isComplete = taskText.classList.toggle("completed");
        completeButton.setAttribute(
            "aria-label",
            `${isComplete ? "Mark" : "Unmark"} "${task}" as ${isComplete ? "incomplete" : "complete"}`
        );
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete "${task}"`);
    deleteButton.addEventListener("click", () => item.remove());

    actions.append(completeButton, deleteButton);
    item.append(taskText, actions);
    todoList.append(item);
    textField.value = "";
    textField.focus();
});

