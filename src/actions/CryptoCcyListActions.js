import * as types from './ActionTypes'


// Function to Trigger Get Crypto Action
export function getCryptoData(payload) {
  return {
    type: types.GET_CRYPTOCCY_DATA,
    payload,
  }
};
