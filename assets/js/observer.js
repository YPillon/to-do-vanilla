/**
 * Initialise un observer qui va surveiller les changement du DOM à sur et à l'intérieur d'un Noeud entré en paramètre.
 * A chaque changement, la fonction passée en paramètre est appelée.
 *
 * @param {HTMLElement} targetNode
 * @param {Function} callback
 */
export const setupObserver = (targetNode, callback) => {
  const observer = new MutationObserver(() => {
    callback();
  });

  const config = {
    childList: true,
    subtree: true,
  };
  observer.observe(targetNode, config);
};
