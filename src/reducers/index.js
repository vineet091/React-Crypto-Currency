import { combineReducers } from 'redux'
import cryptoCcyList from './CryptoCcyListReducer'


// Index Reducer
const rootReducer = combineReducers({
   cryptoCcyList,
})

export default rootReducer
