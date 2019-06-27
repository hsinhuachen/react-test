import React, { Component } from 'react';
import { Todo } from './todo';

class Todolist extends Component {
	constructor (props) {
	    super(props);

	    this.onClick = this.onClick.bind(this);
	    this.onChange = this.onChange.bind(this);
	    this.setCompleted = this.setCompleted.bind(this);
	    this.removeTodo = this.removeTodo.bind(this);

	    // 設定 state
	    this.state = {
	      todos: [
	        {id: 1, name: 'hello', completed: false},
	        {id: 2, name: 'aaaaaa', completed: true},
	        {id: 3, name: 'world', completed: false}
	      ]
	    }
	}

	onChange(e){
		this.setState({
	      text: e.target.value
	    })
	}

	setCompleted(id){
		const {todos} = this.state;

	    // 直接用 map 來找到要更改的資料，其他不變
	    let newTodos = todos.map((item) => {
	      if (item.id === id) {
	        item.completed = true;
	      }
	      return item;
	    })

	    this.setState({
	      todos: newTodos
	    })
	}

	removeTodo(id){
		const {todos} = this.state;

	    // 直接用 filter 來把資料砍掉
	    let newTodos = todos.filter((item) => item.id !== id);

	    this.setState({
	      todos: newTodos
	    })
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
		        <table className="table table-bordered">
		          <thead>
		            <tr>
		              <th>名稱</th>
		              <th>狀態</th>
		              <th>操作</th>
		            </tr>
		          </thead>
		          <tbody>
		          {
		            todos.map((todo) => (
		              <Todo id={todo.id} name={todo.name} completed={todo.completed} 
		                remove={this.removeTodo} setCompleted={this.setCompleted}/>
		            ))
		          }
		          </tbody>
		        </table>
		    </div>
		);
	}
}

export { Todolist };
