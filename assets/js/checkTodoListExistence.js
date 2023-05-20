/**
 * Vérifie l'existence et initialise la to-do list dans le localStorage
 *
 * @returns
 */
export function checkTodoListExistence() {
  if (localStorage.getItem("myTodoList") === null) {
    let myTodoList = [];
    localStorage.setItem("myTodoList", JSON.stringify(myTodoList));

    return "To-do list créée !";
  } else {
    return "To-do list déjà existante.";
  }
}
