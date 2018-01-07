/**
 * container is normal React component that gets bounded to application state.
 * whenever the application state changes the container will re-render as well.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// Actions:
import { selectBookAction } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBookAction(book)}
          className='list-group-item'
        >
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

// container becomes aware of state coming from redux
// mapStateToProps function is hooked up with BookList component
function mapStateToProps (state) {
  // return goes as props to BookList
  return {
    books: state.books
  }
}

// a return value becomes props in BookList container
function mapDispatchToProps (dispatch) {
  // whenever selectBook is called the result should be passed to all of our reducers.
  // example: this.props.selectBook
  return bindActionCreators({ selectBookAction: selectBookAction }, dispatch)
}

// promote BookList from component to container - it needs to know about mapping methods.
// Make this.props.books and this.props.selectBook available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
