/**
 * @jest-environment jsdom
 */

import storeTodo from "../assets/js/storeTodo";

describe("storeTodo", () => {
  test("enregistre la todo dans le localStorage", () => {
    localStorage.setItem("myTodoList", "[]");

    document.body.innerHTML =
      "<div id='todoContainer'>" +
      "     <label class='task'>" +
      "         <input type='checkbox' />" +
      "         <p>Tâche 1</p>" +
      "     </label>" +
      "     <label class='task'>" +
      "         <input type='checkbox' checked />" +
      "         <p>Tâche 2</p>" +
      "     </label>" +
      "     <label class='task'>" +
      "         <input type='checkbox' />" +
      "         <p>Tâche 3</p>" +
      "     </label>" +
      "</div>";

    storeTodo();

    const todoList = JSON.parse(localStorage.getItem("myTodoList"));

    expect(todoList.length).toEqual(3);
    expect(todoList[0].isDone).toBe(false);
    expect(todoList[1].isDone).toBe(true);
    expect(todoList[2].text).toEqual("Tâche 3");
  });
});
