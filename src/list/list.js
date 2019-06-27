import React, { Component } from 'react';

class Todolist extends Component {
	constructor (props) {
	    super(props);

	    this.onClick = this.onClick.bind(this);

	    // 設定 state
	    this.state = {
	      todos: [
	        {id: 1, name: 'hello', completed: false},
	        {id: 2, name: 'aaaaaa', completed: true},
	        {id: 3, name: 'world', completed: false}
	      ]
	    }
	}

	onClick() {
	    // 亂數隨機產生一個 id
	    var newId = Math.floor(Math.random()*500);

	    // 設定 state
	    this.setState({

	      // ES6 語法，就等於是把 todos 新增一個 item
	      todos: [
	        ...this.state.todos,
	        {id: newId, name: '我是' + newId, completed: false}
	      ]
	    })
	}

	render() {
		let todos = this.state.todos;

		return (
			<div className="todolist">
				<button onClick={this.onClick}>Add item</button>
		        <ul>
		          {
		            todos.map((todo) => {
		              return (
		                <li>
		                  name:{todo.name}, {todo.completed ? '已完成' : ''}
		                </li>
		              );
		            })
		          }
		        </ul>
		    </div>
		);
	}
}

export { Todolist };
