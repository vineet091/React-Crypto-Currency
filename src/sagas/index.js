import { fork } from 'redux-saga/effects'
import watchCryptoCcyListSaga from './CryptoCcyListSaga'


// Index Saga
export default function * () {
  yield * [
    fork(watchCryptoCcyListSaga),
  ]
}
