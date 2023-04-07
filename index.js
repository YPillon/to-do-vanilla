// Initialisation de la to-do list dans le localStorage
if (localStorage.getItem("myTodoList") === null) {
  let myTodoList = [];
  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
}

// Sélectionne le container de la to-do list
const todoContainer = document.getElementById("todoContainer");

// Sélection du champ de texte
let inputField = document.getElementById("inputField");

// Récupère la to-do list existante dans le localStorage
function getTodoList() {
  return JSON.parse(localStorage.getItem("myTodoList"));
}

// Créé la to-do list dans le DOM à partir des données du localStorage
(function () {
  let todoList = getTodoList();
  for (taskObject of todoList) {
    createLine(taskObject);
  }
})();

// Créé une nouvelle ligne dans la to-do list
function createLine(taskObject) {
  const newLine = document.createElement("label");
  newLine.classList.add("flex", "task");
  newLine.addEventListener("click", storeTodo);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = taskObject.isDone;
  const textLine = document.createElement("p");
  textLine.innerText = taskObject.text;
  // Création bouton de suppression
  const deleteButton = createDeleteButton();
  addDeleteFunction(deleteButton);

  todoContainer.appendChild(newLine);
  newLine.appendChild(checkbox);
  newLine.appendChild(textLine);
  newLine.appendChild(deleteButton);

  storeTodo();

  return;
}

// Stocke toutes les tâches actuelles de la to-do dans le localStorage
function storeTodo() {
  // Sélectionne toutes les tâches via le DOM
  let rawTasksList = document.querySelectorAll("#todoContainer .task");
  // Convertit la liste de tâches en tableau (pour la compatibilité)
  let parsedTaskList = Array.from(rawTasksList);

  // Initialise le tableau dans lequel sera poussée chaque tâche
  let myTodoList = [];

  // Loop à travers la liste de tâches et la pousse dans le tableau
  parsedTaskList.forEach(function (task) {
    let taskText = task.querySelector("p").innerText;
    let checkboxState = task.querySelector("input[type=checkbox]").checked;

    let taskObject = { text: taskText, isDone: checkboxState };
    myTodoList.push(taskObject);
  });
  // Stocke la to-do list actuelle dans le localstorage en écrasant la sauvegarde précédente
  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
}

function focusInput() {
  inputField.focus();
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  // Ajout du texte du bouton
  deleteButton.innerText = "Supprimer";
  return deleteButton;
}

// Supprime une tâche
function deleteTask(event) {
  // Récupère l'élément parent de l'élément cliqué
  let parentElement = event.target.parentElement;

  // Supprime l'élément parent du DOM
  parentElement.remove();

  // Met à jour le localStorage
  storeTodo();
}

// Liaison de la fonctionnalité d'ajout de ligne au bouton correspondant
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", focusInput);

function addDeleteFunction(element) {
  element.addEventListener("click", deleteTask);
}

// Supprime la dernière ligne de la to-do
function deleteLastLine() {
  // Vérifie si il y au moins une ligne dans la to-do
  if (todoContainer.hasChildNodes() === true) {
    // Supprime la dernière ligne
    todoContainer.lastChild.remove();
    // Met à jour la to-do dans le localStorage
    storeTodo();
    return;
  } else {
    return;
  }
}

// Ajoute la fonction de suppression de la dernière ligne
document
  .getElementById("deleteButton")
  .addEventListener("click", deleteLastLine);

inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createLine({ text: inputField.value, isDone: false });
    inputField.value = "";
    return;
  } else {
    return;
  }
});
