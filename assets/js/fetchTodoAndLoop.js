/**
 * Récupère la to-do dans le localStorage et la transforme en Array
 *
 * @returns {Array}
 */
export function fetchTodo() {
  if (localStorage.getItem("myTodoList") === null) {
    return new Error("Il n'y a pas de to-do list enregistrée !");
  }
  // Récupère la to-do list existante dans le localStorage
  let todoList = JSON.parse(localStorage.getItem("myTodoList"));
  return todoList;
}

/**
 * Loop à travers la to-do list en utilisant la fonction passée en argument
 *
 * @param {function} loopFunction
 * @param {function} attachFunction passée en argument de la loopFunction
 * @returns
 */
export function loopInTodo(loopFunction, attachFunction) {
  //Vérifie que les argumetns sont bien des fonctions
  if (
    typeof loopFunction !== "function" ||
    typeof attachFunction !== "function"
  ) {
    return new Error();
  }
  let todoList = fetchTodo();
  // Loop à travers chaque tâche du tableau et créé une ligne pour chacune
  for (let taskObject of todoList) {
    loopFunction(taskObject, attachFunction);
  }
  return;
}
