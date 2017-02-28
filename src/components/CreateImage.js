import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button'

class CreateImage extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	_choseImage() {
		var randomNumberBetweenZeroAndFour = (function (min, max) {
			min = Math.ceil(min);
		  	max = Math.floor(max);
		  	return Math.floor(Math.random() * (max - min + 1)) + min;
		})(0, 3);

		return this.props.images[randomNumberBetweenZeroAndFour].src;
	}

	handleSubmit(event) {
		event.preventDefault();
		
		let src = this._choseImage();
		this.props.onAdd(src);
	}

	render() {
		return ( 
		<div className={`${this.props.isVisible ? 'visible' : 'hidden'} image-adding`}>
			<form className="image-adding__tooltip-form" onSubmit={this.handleSubmit}>
				<Button className="image-adding__tooltip-form--add-image">Add Image</Button>
				<input className="image-adding__tooltip-form--coord-x" type="text" placeholder="Add coordinate 'X'" />
				<input className="image-adding__tooltip-form--coord-y" type="text" placeholder="Add coordinate 'Y'" />
				<textarea className="image-adding__tooltip-form--text" />
				<Button type="submit" className="image-adding__tooltip-form--add-image">Add Tooltip</Button>
			</form>
		</div>
	);
	}
}

CreateImage.propTypes = {
	isVisible: React.PropTypes.bool,
	onAddImg: React.PropTypes.func
};

export default CreateImage;