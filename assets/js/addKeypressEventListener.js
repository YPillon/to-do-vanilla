/**
 * Ajoute un nouveau keypress event listener à un élément HTML choisi et une fonction choisie à appeler
 *
 * @param {string} pressedKey
 * @param {HTMLElement} element
 * @param {function} functionTriggered
 */
export function addKeypressEventListener(
  pressedKey,
  element,
  functionTriggered
) {
  element.addEventListener("keypress", function (event) {
    try {
      if (
        event.key === pressedKey &&
        // Vérifie bien dans ce cas que "element" est le champ de saisie de texte et qu'il n'est pas vide
        element.tagName.toLowerCase() === "input" &&
        element.type.toLowerCase() === "text" &&
        element.value !== ""
      ) {
        functionTriggered();
        element.value = "";
        return true;
      } else {
        throw new Error("Il y a un problème");
      }
    } catch (error) {
      return error;
    }
  });
}
