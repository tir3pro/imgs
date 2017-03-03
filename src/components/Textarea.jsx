import React from 'react';
import ReactDOM from 'react-dom';

class Textarea extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isErrorMessageShown: false
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleErrors(value, cb) {
		this.setState({
			isErrorMessageShown: !Boolean(value || value.length > 200)
		}, cb);
	}

	handleChange() {
		let text = this.refs.text.value;

		this.handleErrors(text, () => {
			this.props.onError({text: this.state.isErrorMessageShown});
			this.props.onCheck({text});
		});
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor="message">Add your text:</label>
				<textarea className="form-control" rows="5" id="message" ref="text" onChange={this.handleChange}></textarea>
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
	onCheck: React.PropTypes.func.isRequired
}

export default Textarea;