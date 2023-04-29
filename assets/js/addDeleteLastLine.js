import { storeTodo } from "./storeTodo.js";

/**
 * Supprime la dernière ligne de la to-do
 * 
 * @returns 
 */
function deleteLastLine() {
  // Vérifie si il y au moins une ligne dans la to-do
  if (todoContainer.hasChildNodes() === true) {
    // Supprime la dernière ligne
    todoContainer.lastChild.remove();
    // Met à jour la to-do dans le localStorage
    storeTodo();
    return;
  }
  // Sinon ne fait rien
  else {
    return;
  }
}

/**
 * Ajoute la fonction de suppression de la dernière ligne au bouton correspondant
 * 
 * @returns 
 */
// 
export function addDeleteLastLine() {
  document
    .getElementById("deleteButton")
    .addEventListener("click", deleteLastLine);
  return;
}
