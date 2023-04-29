import { storeTodo } from "./assets/js/storeTodo.js";
import { createLine } from "./assets/js/createLine.js";
import { addKeypressEventListener } from "./assets/js/addKeypressEventListener.js";
import { checkTodoListExistence } from "./assets/js/checkTodoListExistence.js";
import { addDeleteLastLine } from "./assets/js/addDeleteLastLine.js";
import { addFocusInput } from "./assets/js/addFocusInput.js";
import { fetchTodoAndLoop } from "./assets/js/fetchTodoAndLoop.js";

checkTodoListExistence();
addDeleteLastLine();
addFocusInput();

//Récupère la to-do list dans le localStorage et créé une ligne dans le DOM pour chaque tâche
fetchTodoAndLoop(createLine);

let inputField = document.getElementById("inputField");

/**
 *Créé une fonction qui enveloppe createLine en permettant de la passer en argument d'une autre fonction avec un argument précis
 @param {object}
 */
function callCreatelineWithArgument() {
  createLine({ text: inputField.value, isDone: false });
}

addKeypressEventListener("Enter", inputField, callCreatelineWithArgument);
