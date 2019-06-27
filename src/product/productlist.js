import React, { Component } from 'react';
import { Item } from './item';


class Productlist extends Component {
	render() {
		let arrLists = ['One of three columns','One of three columns','One of three columns','One of three columns']

		return (	
			<div className="ProductList">
				<div class="row">
				{
				  arrLists.map((list) => <Item title={list} />)  
				}
			  	</div>
			</div>
		)
	}
}


export { Productlist }; 