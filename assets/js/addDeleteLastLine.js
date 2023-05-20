/**
 * Supprime la dernière ligne de la to-do
 *
 * @returns
 */
export function deleteLastLine(node) {
  // Vérifie si il y au moins une ligne dans la to-do
  if (node.hasChildNodes() === true) {
    // Supprime la dernière ligne
    node.lastChild.remove();
    return true;
  }
  // Sinon renvoie une erreur
  else {
    return new Error("Aucune ligne à supprimer");
  }
}

/**
 * Ajoute la fonction de suppression de la dernière ligne au bouton correspondant
 *
 * @return true
 */
//
export function addDeleteLastLine() {
  try {
    function deleteLastLineFromTodoContainer() {
      return deleteLastLine(document.getElementById("todoContainer"));
    }

    document
      .getElementById("deleteButton")
      .addEventListener("click", deleteLastLineFromTodoContainer);
    return true;
  } catch (error) {
    return error;
  }
}
