import React, { Component } from 'react'

class TodoListInputForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onCreate}>
        <input
          placeholder="Input here!"
          value={this.props.currentItem.text}
          onChange={this.props.onInputChange}
        />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default TodoListInputForm