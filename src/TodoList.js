import React, { Component } from 'react'
import TodoListInputForm from './TodoListInputForm'
import TodoListItemList from './TodoListItemList'

class TodoList extends Component {
  id = 0;
  state = {
    currentItem: {text: '', done: false},
    itemList: []
  }
  
  onCreate = (event) => {
    event.preventDefault();

    const {currentItem, itemList} = this.state
    this.setState({
      currentItem: {text: '', done: false},
      itemList: itemList.concat({
        id: this.id += 1,
        text: currentItem.text,
        done: currentItem.done
      })
    })
  }

  onInputChange = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        done: this.state.currentItem.done
      }
    })
  }

  toggleState = (event) => {
    const id = event.target.id-1;
    const itemList = this.state.itemList;
    const done = !itemList[id].done
    itemList[id].done = done
    this.setState({
      itemList: itemList
    })
  }

  render() {
    return (
      <div className="todo-list">
        <TodoListInputForm
          onCreate={this.onCreate}
          onInputChange={this.onInputChange}
          currentItem={this.state.currentItem}
        />
        <TodoListItemList
          toggleState={this.toggleState}
          itemList={this.state.itemList}
        />
      </div>
    )
  }
}

export default TodoList