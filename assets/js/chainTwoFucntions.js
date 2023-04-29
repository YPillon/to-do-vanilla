/**
 * Permet d'éxecuter 2 fonctions à la suite
 *
 * @param {function} function1
 * @param {function} function2
 */
export async function chainTwoFunctions(function1, function2) {
  await function1();
  function2();
  return;
}
