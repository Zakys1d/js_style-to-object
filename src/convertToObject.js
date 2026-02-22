'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
'use strict';

/**
 * @param {string} stylesString
 * @return {Object}
 */

'use strict';

/**
 * @param {string} stylesString
 * @return {Object}
 */
function convertToObject(stylesString) {
  if (typeof stylesString !== 'string') {
    return {};
  }

  const result = {};
  let buffer = '';

  function commit(decl) {
    const s = decl.trim();

    if (!s) {
      return;
    }

    const idx = s.indexOf(':');

    if (idx === -1) {
      return;
    }

    const key = s.slice(0, idx).trim();
    const value = s.slice(idx + 1).trim();

    if (!key || !value) {
      return;
    }

    result[key] = value;
  }

  for (let i = 0; i < stylesString.length; i++) {
    const ch = stylesString[i];

    if (ch === ';') {
      // кінець декларації
      commit(buffer);
      buffer = '';
    } else {
      buffer += ch;
    }
  }

  // якщо остання декларація без ';' в кінці
  commit(buffer);

  return result;
}

module.exports = convertToObject;
