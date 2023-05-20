/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";
import {
  deleteTask,
  addDeleteFunction,
  createDeleteButton,
  createLine,
} from "../assets/js/createLine";

describe("deleteTask", () => {
  test("Supprime du DOM l'élément parent de l'élément ciblé", () => {
    document.body.innerHTML =
      "<div class='container'>" +
      "  <div class='parentElement'>" +
      "    <div class='childElement'></div>" +
      "  </div>" +
      "</div>";

    const childElement = document.querySelector(".childElement");

    childElement.addEventListener("click", deleteTask);

    childElement.click();

    expect(document.querySelector(".parentElement")).toBe(null);
    expect(document.querySelector(".childElement")).toBe(null);
  });
});

describe("addDeleteFunction", () => {
  test("Attache une fonction à un élément qui, lorsque cliqué, retire une tâche du DOM si tout est en ordre", () => {
    document.body.innerHTML =
      "<div id=todoContainer>" +
      "  <label>" +
      "    <p>Une tâche</p>" +
      "    <button></button>" +
      "  </label>" +
      "</div>";

    const button = document.querySelector("button");

    addDeleteFunction(button);
    button.click();

    expect(document.getElementById("todoContainer").children.length).toEqual(0);
  });

  test("renvoie une erreur si l'élément n'est pas un élément HTML", () => {
    const wrongButton = 1;

    const result = addDeleteFunction(wrongButton);

    expect(result).toBeInstanceOf(Error);
  });
});

describe("createDeleteButton", () => {
  test("Créé un bouton", () => {
    const button = createDeleteButton();

    expect(button).toBeInstanceOf(HTMLButtonElement);
  });
});

describe("createLine", () => {
  test("renvoie une erreur si taskObject n'est pas un objet", () => {
    document.body.innerHTML = "<div id='todoContainer'></div>";

    const wrongTaskObject = 1;
    const mockStoreFunction = jest.fn();

    const result = createLine(wrongTaskObject, mockStoreFunction);

    expect(result).toBeInstanceOf(Error);
  });

  test("renvoie une erreur si storeFunction n'est pas une fonction", () => {
    document.body.innerHTML = "<div id='todoContainer'></div>";

    const taskObject = {
      text: "Texte",
      isDone: false,
    };

    const wrongStoreFunction = 1;

    const result = createLine(taskObject, wrongStoreFunction);

    expect(result).toBeInstanceOf(Error);
  });

  test("Créé une nouvelle ligne dans la to-do et renvoie true", () => {
    expect.assertions(7);

    document.body.innerHTML = "<div id='todoContainer'></div>";

    const todoContainer = document.getElementById("todoContainer");

    const taskObject = {
      text: "Texte",
      isDone: true,
    };

    const mockStoreFunction = jest.fn();

    const result = createLine(taskObject, mockStoreFunction);

    expect(document.querySelector("label")).toBeInstanceOf(HTMLLabelElement);
    expect(document.querySelector("input[type=checkbox]")).toBeInstanceOf(
      HTMLInputElement
    );
    expect(document.querySelector("p")).toBeInstanceOf(HTMLParagraphElement);
    expect(document.querySelector("input[type=checkbox]").checked).toBe(true);
    expect(todoContainer.hasChildNodes()).toBe(true);
    expect(result).toBe(true);

    document.querySelector("input[type=checkbox]").click();
    expect(mockStoreFunction).toHaveBeenCalledTimes(1);
  });
});
