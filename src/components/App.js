import React, { Component } from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'

class App extends Component {
 //  constructor() {
 //  	super()
 //  	this.state ={
 // 		todos: []
 //  	}
 //  }

	// addTodo = (item) => { // '...' is making a copy
	//   // console.log('adding new item', item)
	//     let newItem = {
	//       id: this.state.todos.length, 
	//       task: item,
	//       completed: false
	//     }
	//     let todosTemp = [...this.state.todos, newItem]
	//    // console.log('new state', todosTemp)
	//     this.setState({ todos: todosTemp })
	// }

//addTodo={this.addTodo}
//todos={this.state.todos}

  render () {
    return (
      <div className="App">
        <h1>Redux TODOS!</h1>
        <TodoForm />
        <Todos />
      </div>
    )
  }
}

export default App


