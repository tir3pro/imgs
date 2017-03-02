import React from 'react';
import ReactDOM from 'react-dom';

class Checkbox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="checkbox">
				<label><input type="checkbox" value="" onClick={this.props.onChange} />Do you want to add a tooltip?</label>
			</div>
		);
	}
}

React.propTypes = {
	onChange: React.PropTypes.func.isRequired
}

export default Checkbox;