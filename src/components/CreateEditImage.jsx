import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Button from './Button';
import Checkbox from './Checkbox';
import TooltipForm from './TooltipForm';

// Validation collection
import validation from '../validation';

class CreateEditImage extends React.Component {
	constructor(props) {
		super(props);
		
		console.log(this.props);

		this.state = {
			openedForm: this.props.params.state,
			isTooltipFormShown: this.props.params.state !== 'create',
			isImageAdded: false,
			errors: {},
			tooltip: this.props.params.state === 'edit' ?
				this.props.images[Number(this.props.params.id) - 1].tooltip :
	        	{
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

	handleTooltipForm(prop, event) {
		const result = prop !== 'text' ? {
      		[prop]: Number(event.target.value)
    		} : { [prop]: event.target.value };

		this.setState({
			tooltip: Object.assign(
				{},
				this.state.tooltip,
        result
			)
		});
	}

	handleAddImage() {
		this.setState({
			isImageAdded: true
		});
	}

	handleErrors (event) {
	    event.preventDefault();

	    const isImageEmpty = this.state.isImageAdded === false;
	    const areCoordinatesEmpty = this.state.tooltip.x === 0 || this.state.tooltip.y === 0;
	    const isTextEmpty = this.state.tooltip.text.trim() === '';

	    const errors = {};

	    if (isImageEmpty) {
	      	errors.image = validation('image');
	    }

	    if (areCoordinatesEmpty) {
	      	errors.coordinate = validation('coordinate');
	    }

	    if (isTextEmpty) {
	      	errors.text = validation('description');
	    }

	    return errors;
	}

	handleSubmit(event) {
		const errors = this.handleErrors(event);
		if (Object.keys(errors).length) {
      		this.setState({
        		errors
      		});
	    } else {
			this.props.onAdd(this._choseImage(), this.state.tooltip);
		}
	}

	render() {
		const imageValidationObject = this.state.errors.image;
		const isImageInvalid = Boolean(imageValidationObject);

		return (
			<div className="image-adding">
				<div className="image-adding__overlay"></div>
				<form className="form-group image-adding__tooltip-form" onSubmit={this.handleSubmit}>
					<Link to="/">
						<button type="button" className="close" aria-label="Close">
	  						<span aria-hidden="true">&times;</span>
						</button>
					</Link>

					<div className="add-image">
						<p>Please add a new image</p>
						<button type="button" className="btn btn-primary" onClick={this.handleAddImage} >Add image</button>
						{
              				isImageInvalid ?
							<div className="alert alert-danger">
								<strong>{ imageValidationObject.message }</strong>
							</div> : null
						}
						{
              				isImageInvalid ? <p className="add-image__added">Image added!</p> : null
						}
					</div>

					<Checkbox onChange={this.toggleTooltip} value={this.state.isTooltipFormShown} />

					{
						!this.state.isTooltipFormShown ? '' : 
							<TooltipForm
								onUpdateForm={this.handleTooltipForm}
								errors={this.state.errors}
								tooltip={this.state.tooltip}
							/>
					}
					
					<div className="submit-btn">
						<button type="submit" className="btn btn-success">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateEditImage;