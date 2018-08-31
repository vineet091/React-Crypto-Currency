import * as types from '../actions/ActionTypes'

const initialState = {
  payload: [],
  requestType: '',
  errorMessage: '',
}
// CryptoCcyListReducer Reducer Tto listen to actions
export default function cryptoCcyListReducer (state = initialState, action) {
  switch (action.type) {

    case types.GET_CRYPTOCCY_DATA: {
      return Object.assign({}, state, {
        requestType: '',
        errorMessage: '',
      })
    }
    case types.GET_CRYPTOCCY_DATA_SUCCESS: {
      const  { payload } = action
      return Object.assign({}, state, {
        payload,
        requestType: 'GET',
        errorMessage: '',
      })
    }

    case types.GET_CRYPTOCCY_DATA_ERROR: {
      const  { error } = action
      return Object.assign({}, state, {
        errorMessage: error,
        payload: [],
      })
    }
    default:
      return state
  }
}
