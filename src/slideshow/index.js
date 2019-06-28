import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class Slideshow extends Component {
	
	render() {
		let slideImages = [
			"http://malsup.github.io/images/p1.jpg",
			"http://malsup.github.io/images/p2.jpg",
			"http://malsup.github.io/images/p3.jpg",
			"http://malsup.github.io/images/p4.jpg"
		]


	    return (
	    	<Fade {...properties}>
	    		{
				  slideImages.map((img) => <Slideitem img={img} title="Slide 1" />)  
				}
	    	</Fade>
	    );
	}
}

class Slideitem extends Component {
	render() {
		const {img, title} = this.props;
		return (
			<div className="each-slide">
	          <div style={{'backgroundImage': `url(${img})`}}>
	            <span>{title}</span>
	          </div>
	        </div>
		)
	}
}

export { Slideshow, Slideitem };