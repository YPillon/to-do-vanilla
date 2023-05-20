/**
 * @jest-environment jsdom
 */

import {
  deleteLastLine,
  addDeleteLastLine,
} from "../assets/js/addDeleteLastLine.js";
import { jest } from "@jest/globals";

describe("deleteLastLine", () => {
  test("renvoie une erreur si la to-do list est vide", () => {
    document.body.innerHTML = "<div id=todoContainer>" + "</div>";

    const todoContainer = document.getElementById("todoContainer");

    const result = deleteLastLine(todoContainer);

    expect(result).toBeInstanceOf(Error);
    expect(result).toBeTruthy();
  });

  test("renvoie true après la suppression d'une ligne", () => {
    document.body.innerHTML =
      "<div id=todoContainer>" +
      "<p>Première ligne</p>" +
      "<p>Deuxième ligne</p>" +
      "<p>Troisième ligne</p>" +
      "</div>";

    const todoContainer = document.getElementById("todoContainer");

    let count = 0;

    const result = deleteLastLine(todoContainer);

    while (todoContainer.hasChildNodes() === true) {
      deleteLastLine(todoContainer);
      count++;
    }
    expect(count).toBe(2);
    expect(result).toBe(true);
  });
});

describe("addDeleteLastLine", () => {
  test("a bien ajouté la fonctionnalité de suppression au bouton", () => {
    document.body.innerHTML =
      "<div id=todoContainer>" +
      "<p>Première ligne</p>" +
      "<p>Deuxième ligne</p>" +
      "</div>" +
      "<button id=deleteButton>Supprimer la dernière ligne</button>";

    const deleteButton = document.getElementById("deleteButton");

    const todoContainer = document.getElementById("todoContainer");

    addDeleteLastLine();

    deleteButton.click();

    expect(todoContainer.children.length).toEqual(1);
  });

  test("renvoie une erreur si le bouton n'existe pas", () => {
    document.body.innerHTML =
      "<div id=todoContainer>" +
      "<p>Première ligne</p>" +
      "<p>Deuxième ligne</p>" +
      "</div>";

    addDeleteLastLine();

    const result = addDeleteLastLine();

    expect(result).toBeInstanceOf(Error);
  });
});
