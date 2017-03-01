import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Button from './Button';

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
			<div className="image-adding">
				<form className="form-group image-adding__tooltip-form" onSubmit={this.handleSubmit}>
					<Link to={'/'}>
						<button type="button" className="close" aria-label="Close">
	  						<span aria-hidden="true">&times;</span>
						</button>
					</Link>
					<div className="add-image">
						<p>Please add a new image</p>
						<button type="button" className="btn btn-primary">Add image</button>
					</div>
					<div className="tooltip-containe">
						<p>Please add tooltip coordinates and its text</p>
						<div className="form-group">
						 	<label htmlFor="coord-x">Setup X-coordinate</label>
						    <input type="text" className="form-control" id="coord-x" />
						</div>
						<div className="form-group">
						    <label htmlFor="coord-y">Setup Y-coordinate</label>
						    <input type="text" className="form-control" id="coord-y" />
						</div>
						<div className="form-group">
	  						<label htmlFor="message">Add your text:</label>
	  						<textarea className="form-control" rows="5" id="message"></textarea>
						</div>
						<div className="add-tooltip">
							<button type="button" className="btn btn-primary">Add tooltip</button>
						</div>
					</div>
					<div className="submit-btn">
						<button type="submit" className="btn btn-success">Create</button>
					</div>

					{/*<Button className="image-adding__tooltip-form image-adding__tooltip-form--add-image">Add Image</Button>
					<input className="image-adding__tooltip-form image-adding__tooltip-form--coord-x" type="text" placeholder="Add coordinate 'X'" />
					<input className="image-adding__tooltip-form image-adding__tooltip-form--coord-y" type="text" placeholder="Add coordinate 'Y'" />
					<textarea className="image-adding__tooltip-form--text" />
					<Button type="submit" className="image-adding__tooltip-form--add-image">Add Tooltip</Button>*/}
					{ this.props.tooltips.length ? <Tooltip /> : null }
				</form>
			</div>
		);
	}
}

export default CreateImage;