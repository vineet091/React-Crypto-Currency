import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducers'
import sagas from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
export const middleware = [sagaMiddleware]

/* Creating Store with Reducers and Saga Middleware  */
export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

sagaMiddleware.run(sagas)
