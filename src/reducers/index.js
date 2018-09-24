import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
//import visibilityReducer from './visibilityReducer'

const reducer = combineReducers({
	todos: todoReducer
	//visibility: visibilityReducer
})


export default reducer;
