import React, { Component } from 'react'

class TodoListItemList extends Component {
  render() {
    const {itemList} = this.props;
    const todoList = itemList.map(item => (
      <li key={item.id}
          id={item.id}
          className={item.done===true?'checked':'not-checked'}
          onClick={this.props.toggleState}>
        {item.text}
      </li>
    ))
    return (
      <ul className="todo-item-list">
        {todoList}
      </ul>
    )
  }
}

export default TodoListItemList