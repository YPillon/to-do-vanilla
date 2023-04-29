/**
 * Récupère la Todo-list existante dans le localStorage et loop à travers en utilisant la fonction passée en argument
 *
 * @param {function} loopFunction
 * @returns
 */
export function fetchTodoAndLoop(loopFunction) {
  // Récupère la to-do list existante dans le localStorage
  let todoList = JSON.parse(localStorage.getItem("myTodoList"));
  // Loop à travers chaque tâche du tableau et créé une ligne pour chacune
  for (let taskObject of todoList) {
    loopFunction(taskObject);
  }
  return
}
