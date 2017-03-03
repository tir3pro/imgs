import React from 'react';
import ReactDOM from 'react-dom';

import Coordinate from './Coordinate';
import Textarea from './Textarea';

class TooltipForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {
				x: false,
				y: false,
				text: false
			}
		}

		this.handleErrors = this.handleErrors.bind(this);
		this.isAnyError = this.isAnyError.bind(this);
	}

	isAnyError() {
		return Object.keys(this.state.errors).some(key => this.state.errors[key]);
	}

	handleErrors(data) {
		let isAnyError;

		this.setState({
			errors: Object.assign({}, this.state.errors, data)
		}, () => {
			isAnyError = this.isAnyError();
			this.props.checkErrors(isAnyError);
		});
	}

	render() {
		return (
			<div className="tooltip-container">
				<p>Please add tooltip coordinates and its text</p>
				<Coordinate coordinate="x" onCheck={this.props.onUpdateForm} onError={this.handleErrors} />
				<Coordinate coordinate="y" onCheck={this.props.onUpdateForm} onError={this.handleErrors} />
				<Textarea onCheck={this.props.onUpdateForm} onError={this.handleErrors} />
			</div>
		);
	}
}

React.propTypes = {
	onUpdateForm: React.PropTypes.func.isRequired,
	checkErrors: React.PropTypes.func.checkErrors
}

export default TooltipForm;