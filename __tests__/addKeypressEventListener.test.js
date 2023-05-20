/**
 * @jest-environment jsdom
 */

import { addKeypressEventListener } from "../assets/js/addKeypressEventListener.js";
import { jest } from "@jest/globals";

describe("addKeypressEventListener", () => {
  test("ajoute bien l'eventListener choisi à l'lélément choisi", () => {
    document.body.innerHTML = "<input type=text id=inputField />";

    const inputField = document.getElementById("inputField");
    const mock = jest.fn(() => "Je suis une mock !");

    addKeypressEventListener("Enter", inputField, mock);

    const enterKeypress = new KeyboardEvent("keypress", { key: "Enter" });
    inputField.value = "Une valeur";
    inputField.dispatchEvent(enterKeypress);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveReturnedWith("Je suis une mock !");
  });

  test("N'appelle pas functionTriggered si les conditions ne sont pas requises", () => {
    document.body.innerHTML = "<input type=text id=inputField />";

    const inputField = document.getElementById("inputField");
    const mock = jest.fn(() => "Je suis une mock !");

    addKeypressEventListener("Enter", inputField, mock);

    const enterKeypress = new KeyboardEvent("keypress", { key: "Enter" });
    inputField.dispatchEvent(enterKeypress);

    expect(mock).not.toHaveBeenCalled();
  });
});
