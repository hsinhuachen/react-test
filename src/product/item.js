import React, { Component } from 'react';
import routes, { rootPath } from '../routes';
import { Link } from 'react-router-dom';

class Item extends Component {
	render() {
		const {title} = this.props;
		return (
			<div className="col-sm">
				<h3>{title}</h3>
				<Link className="btn btn-primary" to={`${rootPath}/products/item`}>
	              Detail
	            </Link>
			</div>
		)
	}
}


export { Item }; 