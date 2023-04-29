// Sélection du champ de texte
let inputField = document.getElementById("inputField");

// Focus sur le champ de saisie
function focusInput() {
  inputField.focus();
}

/**
 * Ajoute la fonctionnalité permettant le focus du champ de saisie lors du clic sur le bouton d'ajout d'une tâche
 *
 * @returns
 */
export function addFocusInput() {
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", focusInput);
  return;
}
