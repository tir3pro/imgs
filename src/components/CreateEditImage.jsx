import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Button from './Button';
import Checkbox from './Checkbox';
import Coordinate from './Coordinate';
import Textarea from './Textarea';

class CreateImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openedForm: 'create',
			isTooltipFormShown: false,
			tooltip: {
				x: '',
				y: 0,
				text: ''
			}
		};

		this.toggleTooltip = this.toggleTooltip.bind(this);
		this.handleCoordinates = this.handleCoordinates.bind(this);
		this.handleText = this.handleText.bind(this);
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

	toggleTooltip() {
		this.setState({
			isTooltipFormShown: !this.state.isTooltipFormShown
		});	
	}

	handleCoordinates(coordinates) {
		this.setState({
			tooltip: Object.assign({}, this.state.tooltip, coordinates)
		});
	}

	handleText(text) {
		this.setState({
			tooltip: Object.assign({}, this.state.tooltip, text)
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		
		let src = this._choseImage();
		this.props.onAdd(src);
	}

	render() {
		return (
			<div className="image-adding">
				<div className="image-adding__overlay"></div>
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

					<Checkbox onChange={this.toggleTooltip} />

					{ !this.state.isTooltipFormShown ? '' : 
						<div className="tooltip-container">
							<p>Please add tooltip coordinates and its text</p>
							<Coordinate coordinate="x" isErrorMessageShown={this.state.isErrorMessageShown} onCheck={this.handleCoordinates} />
							<Coordinate coordinate="y" isErrorMessageShown={this.state.isErrorMessageShown} onCheck={this.handleCoordinates} />
							<Textarea onCheck={this.handleText} />
						</div>
					}

					<div className="submit-btn">
						<button type="submit" className="btn btn-success">Create</button>
					</div>

					{ this.props.tooltips.length ? <Tooltip /> : null }
				</form>
			</div>
		);
	}
}

export default CreateImage;