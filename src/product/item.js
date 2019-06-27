import React, { Component } from 'react';

class Item extends Component {
	render() {
		const {title} = this.props;
		return (
			<div class="col-sm">
				<h3>{title}</h3>
			</div>
		)
	}
}


export { Item }; 