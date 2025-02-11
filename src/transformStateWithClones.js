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
    switch (actions) {
      case action.type === 'addProperties':
        currentState = Object.assign(currentState, action.extraData);
        break;

      case action.type === 'removeProperties':
        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        break;
      case action.type === 'clear':
        for (const key in currentState) {
          delete currentState[key];
        }
        break;
      default:
        return finalArray;
    }
    finalArray.push({ ...currentState });
  }

  return finalArray;
}

module.exports = transformStateWithClones;
