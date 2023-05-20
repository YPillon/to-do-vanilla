/*Enlever toutes les mentions de storeFunction à part pour les checked car j'ai pas réussi à setup l'Observer
correctement pour ça.
Donc il faudra modifier les tests aussi.

/**
 * Supprime une tâche de la to-do list
 *
 * @param {Event} event
 * @param {Function} storeFunction
 * @returns true
 */
export function deleteTask(event) {
  // Récupère l'élément parent de l'élément cliqué
  let parentElement = event.target.parentElement;

  // Supprime l'élément parent du DOM
  parentElement.remove();

  return true;
}

/**
 * Ajoute la fonction de suppression au bouton d'une ligne de la to-do list
 *
 * @param {HTMLElement} element
 * @param {Function} storeFunction
 * @returns true
 */
export function addDeleteFunction(element) {
  try {
    if (element instanceof HTMLElement) {
      element.addEventListener("click", deleteTask);

      return true;
    } else {
      throw new Error();
    }
  } catch (error) {
    return error;
  }
}

/**
 * Créé un bouton statique de suppression d'une ligne de la to-do list
 *
 * @returns {HTMLelement}
 */
export function createDeleteButton() {
  const deleteButton = document.createElement("button");
  // Ajout du texte du bouton addDeleteFunctionn
  deleteButton.innerText = "❌";
  // Ajout du style du bouton
  deleteButton.classList.add("mx", "marginTop", "smText");
  return deleteButton;
}

/**
 * Créé une nouvelle ligne dans la to-do list
 *
 * @param {Object} taskObject
 * @param {Function} storeFunction
 * @returns true
 */
export function createLine(taskObject, storeFunction) {
  try {
    //Vérifie que les arguments passés sont corrects
    if (
      !(taskObject instanceof Object) ||
      //On utilise typeof plutôt que instanceof car sinon les fonctions mockées lèvent une exception
      typeof storeFunction !== "function"
    ) {
      throw new Error();
    }

    const todoContainer = document.getElementById("todoContainer");

    // Création du wrapper de la ligne
    const newLine = document.createElement("label");
    newLine.classList.add("flex", "task");

    // Création de la coche
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // Vérifie l'état de la tâche (Fait ou À faire)
    checkbox.checked = taskObject.isDone;
    checkbox.addEventListener("click", storeFunction);

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

    return true;
  } catch (error) {
    return error;
  }
}
