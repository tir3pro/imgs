import React from 'react';
import ReactDOM from 'react-dom';

class Coordinate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isErrorMessageShown: false
		};

		this.coordinate = this.props.coordinate;
		this.handleChange = this.handleChange.bind(this);
		this.handleErrors = this.handleErrors.bind(this);
	}

	handleErrors(value, cb) {
		this.setState({
			isErrorMessageShown: !Boolean(value.match(/^[0-9]*$/) && Number(value) < 200)
		}, cb);
	}

	handleChange() {
		let value = this.refs[this.coordinate].value;

		this.handleErrors(value, () => {
			this.props.onError({[this.coordinate]: this.state.isErrorMessageShown});
			this.props.onCheck({[this.coordinate]: value});
		});
	}

	render() {
		return (
			<div className="form-group">
			 	<label htmlFor={`coord-${this.coordinate}`}>{`Setup ${this.coordinate}-coordinate`}</label>
			    <input type="text" ref={this.coordinate} className="form-control" id={`coord-${this.coordinate}`} onChange={this.handleChange} />
			    {
			    	!this.state.isErrorMessageShown ? '' 
			    	: 
				    <div className="alert alert-danger">
						<strong>Danger!</strong> Indicates a dangerous or potentially negative action.
					</div>
				} 
			</div>
		);
	}
}

React.propTypes = {
	coordinate: React.PropTypes.func.isRequired,
	isErrorMessageShown: React.PropTypes.bool.isRequired,
	onCheck: React.PropTypes.func.isRequired,
	onError: React.PropTypes.func.isRequired
}

export default Coordinate;