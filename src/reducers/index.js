import { combineReducers } from 'redux';
import  BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  // global application state
  books: BooksReducer
});

export default rootReducer;
