import { storeTodo } from "./storeTodo.js";

/**
 * Supprime une tâche de la to-do list
 * 
 * @param {Event} event 
 * @returns 
 */
function deleteTask(event) {
  // Récupère l'élément parent de l'élément cliqué
  let parentElement = event.target.parentElement;

  // Supprime l'élément parent du DOM
  parentElement.remove();

  // Met à jour le localStorage
  storeTodo();

  return;
}

/**
 * Ajoute la fonction de suppression au bouton d'une ligne de la to-do list
 *
 * @param {HTMLElement} element
 * @returns
 */
function addDeleteFunction(element) {
  element.addEventListener("click", deleteTask);
  return;
}

/**
 * Créé un bouton statique de suppression d'une ligne de la to-do list
 * 
 * @returns {HTMLelement}
 */
function createDeleteButton() {
  const deleteButton = document.createElement("button");
  // Ajout du texte du bouton
  deleteButton.innerText = "❌";
  // Ajout du style du bouton
  deleteButton.classList.add("mx", "marginTop", "smText");
  return deleteButton;
}

/**
 * Créé une nouvelle ligne dans la to-do list
 *
 * @param {Object} taskObject
 * @returns
 */
export function createLine(taskObject) {
  // Création du wrapper de la ligne
  const newLine = document.createElement("label");
  newLine.classList.add("flex", "task");
  newLine.addEventListener("click", storeTodo);

  // Création de la coche
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  // Vérifie l'état de la tâche (Fait ou À faire)
  checkbox.checked = taskObject.isDone;

  // Création du texte de la tâche à partir des données entrées en argument
  const textLine = document.createElement("p");
  textLine.innerText = taskObject.text;

  // Création du bouton de suppression
  const deleteButton = createDeleteButton();
  addDeleteFunction(deleteButton);

  // Insertion des éléments dans le DOM
  todoContainer.appendChild(newLine);
  newLine.appendChild(checkbox);
  newLine.appendChild(textLine);
  newLine.appendChild(deleteButton);

  // Update du nouvel état dans le localStorage
  storeTodo();

  return;
}
