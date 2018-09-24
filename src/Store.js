
import { createStore } from 'redux'
import reducer from './reducers'

// same as import reducer from './reducers/index'
const configureStore = () => {
  return createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default configureStore


