export function selectBookAction (book) {
  // selectBook needs to return an action - object with "type" property. Type may be a const, always uppercase
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
