/**
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
