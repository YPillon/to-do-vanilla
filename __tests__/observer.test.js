/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";
import { setupObserver } from "../assets/js/observer";

describe("setupObserver", () => {
  test("surveille un noeud du DOM et ses descendants et appelle une fonction à chaque changement", async () => {
    document.body.innerHTML =
      "<div id='todoContainer'>" + "<p id='paragraph1'></p>" + "</div>";

    const todoContainer = document.getElementById("todoContainer");

    const mock = jest.fn(() => "Le DOM a été modifié");

    //Initialise l'observer
    setupObserver(todoContainer, mock);

    //1er changement du DOM
    const paragraph2 = document.createElement("p");
    await todoContainer.appendChild(paragraph2);

    //2e changement du DOM
    await document.getElementById("paragraph1").remove();

    expect(mock).toHaveBeenCalledTimes(2);
  });
});
