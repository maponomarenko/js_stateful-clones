'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  const finalArray = [];
  let currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        currentState = Object.assign(currentState, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        break;
      case 'clear':
        currentState = {};
        break;
    }

    finalArray.push({ ...currentState });
  }

  return finalArray;
}

module.exports = transformStateWithClones;
