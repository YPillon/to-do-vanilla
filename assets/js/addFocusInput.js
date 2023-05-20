/*// Sélection du champ de texte
let inputField = document.getElementById("inputField");

// Focus sur le champ de saisie

*/
/**
 * Ajoute la fonctionnalité permettant le focus du champ de saisie lors du clic sur le bouton d'ajout d'une tâche
 *
 * @returns
 */
export function addFocusInput() {
  try {
    function focusInput() {
      const inputField = document.getElementById("inputField");
      inputField.focus();
    }
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", focusInput);
    return true;
  } catch (error) {
    return error;
  }
}
