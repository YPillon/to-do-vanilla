/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";

import { fetchTodo, loopInTodo } from "../assets/js/fetchTodoAndLoop";

beforeEach(() => {
  const myTodoList = [
    {
      text: "1ère tâche",
      isDone: true,
    },
    {
      text: "2è tâche",
      isDone: false,
    },
  ];

  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
});

afterEach(() => {
  localStorage.clear();
});

describe("fetchTodo", () => {
  test("Renvoie une erreur si myTodoList n'est pas initialisée dans le localStorage", () => {
    //Supprime la to-do list du localStorage
    localStorage.clear();

    const result = fetchTodo();

    expect(result).toBeInstanceOf(Error);
  });

  test("renvoie la to-do list sous forme de tableau", () => {
    const result = fetchTodo();

    expect(result).toBeInstanceOf(Array);
  });

  //
  //
  //RAJOUTER UN TEST ICI
  //
  //
});

describe("loopInTodo", () => {
  test("Renvoie une erreur si un des 2 arguments n'est pas une fonction", () => {
    const attachFunction = () => true;
    const falseFunction = 1;

    const result = loopInTodo(falseFunction, attachFunction);

    expect(result).toBeInstanceOf(Error);
  });

  test("Loop bien à travers la to-do et exécute la fonction passée en argument", () => {
    var count = 0;
    var taskArray = [];

    //initialise les fonctions à passer en argument
    const mockAttachFunction = jest.fn(() => {
      count++;
    });

    const mockLoopFunction = jest.fn((object, attachFunction) => {
      let taskState = object.isDone ? "effectuée" : "à faire";

      attachFunction();

      const task = object.text + " " + taskState;

      taskArray.push(task);
    });

    loopInTodo(mockLoopFunction, mockAttachFunction);

    expect(count).toEqual(2);
    expect(taskArray.length).toEqual(2);
    expect(taskArray[0]).toEqual("1ère tâche effectuée");
    expect(taskArray[1]).toEqual("2è tâche à faire");
    expect(mockLoopFunction).toHaveBeenCalledTimes(2);
    expect(mockAttachFunction).toHaveBeenCalledTimes(2);
  });
});
