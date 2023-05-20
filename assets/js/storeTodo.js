/**
 * Stocke toutes les tâches actuelles de la to-do dans le localStorage
 *
 * @returns
 */
function storeTodo() {
  // Sélectionne toutes les tâches via le DOM
  let rawTasksList = document.querySelectorAll("#todoContainer .task");
  // Convertit la liste de tâches en tableau (pour la compatibilité)
  let parsedTaskList = Array.from(rawTasksList);

  // Initialise le tableau dans lequel sera poussée chaque tâche
  let myTodoList = [];

  // Loop à travers la liste de tâches et la pousse dans le tableau
  parsedTaskList.forEach(function (task) {
    let taskText = task.querySelector("p").textContent; //textContent plutôt que innerText pour la compatibilité lors des tests
    let checkboxState = task.querySelector("input[type=checkbox]").checked;

    let taskObject = { text: taskText, isDone: checkboxState };
    myTodoList.push(taskObject);
  });
  // Stocke la to-do list actuelle dans le localstorage en écrasant la sauvegarde précédente
  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));

  return true;
}

export default storeTodo;
