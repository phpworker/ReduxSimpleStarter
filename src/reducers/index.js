/**
 * Redux:
 * Redux creates a state objects that contains our books
 * and then maps that state as props to our component
 */
import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  // global application state
  books: BooksReducer
})

export default rootReducer
