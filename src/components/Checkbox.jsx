import React from 'react';

class Checkbox extends React.Component {
	render() {
		return(
			<div className="checkbox">
				<label>
					<input type="checkbox" checked={this.props.value} onChange={this.props.onChange} />
					Do you want to add a tooltip?
				</label>
			</div>
		);
	}
}

React.propTypes = {
  value: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Checkbox;