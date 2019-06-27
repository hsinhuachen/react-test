import React, { Component } from 'react';

class Todo extends Component {
	constructor (props) {
	    super(props);

	    this.setCompleted = this.setCompleted.bind(this);
	    this.remove = this.remove.bind(this);
	}

	setCompleted() {
	   this.props.setCompleted(this.props.id);
	}

	remove () {
	   this.props.remove(this.props.id);
	}

	render() {
	    const {name, completed} = this.props;
	    return (
	    	<tr>
	    		<td>{name}</td>
		        <td>{completed ? '已完成^_^' : '還沒完成QQ'}</td>
		        <td>
		          <div className="btn btn-primary" onClick={this.setCompleted}>完成</div>
		          <div className="btn btn-danger" onClick={this.remove}>刪除</div>
		        </td>
	    	</tr>
	    );
	}
}

export { Todo };