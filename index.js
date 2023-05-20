import storeTodo from "./assets/js/storeTodo.js";
import { createLine } from "./assets/js/createLine.js";
import { addKeypressEventListener } from "./assets/js/addKeypressEventListener.js";
import { checkTodoListExistence } from "./assets/js/checkTodoListExistence.js";
import { addDeleteLastLine } from "./assets/js/addDeleteLastLine.js";
import { addFocusInput } from "./assets/js/addFocusInput.js";
import { loopInTodo } from "./assets/js/fetchTodoAndLoop.js";
import { setupObserver } from "./assets/js/observer.js";

checkTodoListExistence();
addDeleteLastLine();
addFocusInput();

let inputField = document.getElementById("inputField");
let todoContainer = document.getElementById("todoContainer");

// Configure l'observer qui va sauvegarder la to-do à chaque changement dans le DOM
setupObserver(todoContainer, storeTodo);

//Récupère la to-do list dans le localStorage et créé une ligne dans le DOM pour chaque tâche
loopInTodo(createLine, storeTodo);

/**
 *Créé une fonction qui enveloppe createLine en permettant de la passer en argument d'une autre fonction avec un argument précis
 @param {object}
 */
function callCreatelineWithArgument() {
  createLine({ text: inputField.value, isDone: false }, storeTodo);
}

addKeypressEventListener("Enter", inputField, callCreatelineWithArgument);
