/**
 * container becomes aware of state coming from redux
 * mapStateToProps function is hooked up with BookList component
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className='list-group-item'>
          {book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  // return goes as props to BookList
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)
