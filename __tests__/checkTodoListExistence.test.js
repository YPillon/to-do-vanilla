/**
 * @jest-environment jsdom
 */

import { checkTodoListExistence } from "../assets/js/checkTodoListExistence";

describe("checkTodoListExistence", () => {
  test("Créé la to-do list si elle n'existe pas encore", () => {
    const result = checkTodoListExistence();

    expect(result).toEqual("To-do list créée !");
  });

  test("Ne fait rien si la to-do list est déjà initialisée", () => {
    const result = checkTodoListExistence();

    expect(result).toEqual("To-do list déjà existante.");
  });
});
