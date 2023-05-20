/**
 * @jest-environment jsdom
 */

import { addFocusInput } from "../assets/js/addFocusInput";

describe("addFocusInput", () => {
  test("focus sur l'élément input", () => {
    document.body.innerHTML =
      "<input type=text id=inputField />" +
      "<button id=addButton></button>";

    addFocusInput();
    const result = addFocusInput();

    const addButton = document.getElementById("addButton");
    addButton.click();

    expect(result).toBe(true);
    expect(document.activeElement.tagName).toEqual("INPUT");
  });

  test("renvoie une erreur si le bouton ne peut pas être sélectionné", () => {
    document.body.innerHTML = "<input type=text id=inputField />";

    const result = addFocusInput();

    expect(result).toBeInstanceOf(Error);
  });
});
