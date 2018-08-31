import { takeLatest, put, call } from 'redux-saga/effects'
import 'babel-polyfill'
import { getCryptoData } from '../api/api'
import * as types from '../actions/ActionTypes'


// Crypto Currency Saga
export function * getCryptoDataSaga (action) {
  try {
    const payload = yield call(getCryptoData, action.payload)

    yield put({
      type: types.GET_CRYPTOCCY_DATA_SUCCESS,
      payload,
    })
  } catch (error) {
    yield put({
      type: types.GET_CRYPTOCCY_DATA_ERROR,
      error,
    })
  }
}

export default function * watchCryptoCcyListSaga () {
  yield takeLatest(types.GET_CRYPTOCCY_DATA, getCryptoDataSaga)
}
