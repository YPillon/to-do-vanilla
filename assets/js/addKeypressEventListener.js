/**
 * Ajoute un nouveau keypress event listener à un élément HTML choisi et une fonction choisie à appeler
 *
 * @param {string} pressedKey
 * @param {HTMLElement} element
 * @param {Function} functionTriggered
 */
export function addKeypressEventListener(
  pressedKey,
  element,
  functionTriggered
) {
  element.addEventListener("keypress", function (event) {
    if (event.key === pressedKey) {
      functionTriggered();
      // Vérifie bien dans ce cas que "element" est le champ de saisie de texte
      if (
        element.tagName.toLowerCase() === "input" &&
        element.type.toLowerCase() === "text"
      ) {
        element.value = "";
      }
    } else {
      return;
    }
  });
}
