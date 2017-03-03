import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Button from './Button';
import Checkbox from './Checkbox';
import TooltipForm from './TooltipForm';

class CreateEditImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openedForm: this.props.params.state,
			isTooltipFormShown: false,
			isImageAdded: null,
			errors: null,
			tooltip: {
				x: 0,
				y: 0,
				text: ''
			}
		};

		this.toggleTooltip = this.toggleTooltip.bind(this);
		this.handleTooltipForm = this.handleTooltipForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddImage = this.handleAddImage.bind(this);
		this._choseImage = this._choseImage.bind(this);
		this.handleErrors = this.handleErrors.bind(this);
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

	handleTooltipForm(data) {
		this.setState({
			tooltip: Object.assign({}, this.state.tooltip, data)
		});
	}

	handleAddImage() {
		this._choseImage();

		this.setState({
			isImageAdded: true
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let src = this._choseImage();
		let isImageAdded = this.state.isImageAdded;
		
		if (isImageAdded && !this.state.isTooltipFormShown) {
			this.props.onAdd(src);
		} else if (isImageAdded && this.state.isTooltipFormShown) {

		} else {
			this.setState({
				isImageAdded: false
			});
		}

		// if (this.state.errors === null) {
		// 	this.setState({errors: true});
		// }

		/*adding tooltip*/
		let tooltipSettings = this.state.tooltip;
		this.props.addTooltip(tooltipSettings);
	}

	handleErrors(data) {
		console.log('data: ', data);
		this.setState({
			errors: data
		});
	}

	render() {
		let isImageAdded = this.state.isImageAdded;

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
						<button type="button" className="btn btn-primary" onClick={this.handleAddImage} >Add image</button>
						{
							isImageAdded || isImageAdded === null ? '' :
							<div className="alert alert-danger">
								<strong>Danger!</strong> Indicates a dangerous or potentially negative action.
							</div>
						}
						{
							isImageAdded ? <p className="add-image__added">Image added!</p> : ''
						}
					</div>

					<Checkbox onChange={this.toggleTooltip} />

					{ 
						!this.state.isTooltipFormShown ? '' : 
							<TooltipForm onUpdateForm={this.handleTooltipForm} checkErrors={this.handleErrors} />
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

export default CreateEditImage;