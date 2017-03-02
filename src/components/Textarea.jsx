import React from 'react';
import ReactDOM from 'react-dom';

class Textarea extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		let text = this.refs.text.value;

		this.props.onCheck({text});
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor="message">Add your text:</label>
				<textarea className="form-control" rows="5" id="message" ref="text" onChange={this.handleChange}></textarea>
			</div>
		);
	}
}

React.propTypes = {
	onCheck: React.PropTypes.func.isRequired
}

export default Textarea;