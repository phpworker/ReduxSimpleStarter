/**
 * Redux:
 * Redux creates a state objects that contains our books
 * and then maps that state as props to our component
 * container is normal React component that gets bounded to application state.
 * whenever the application state changes the container will re-render as well.
 * Actions:
 *
 */
import React, { Component } from 'react'
import BookList from '../containers/book-list'

export default class App extends Component {
  render () {
    console.dir(BookList)
    return (
      <div>
        <BookList />
      </div>
    )
  }
}
