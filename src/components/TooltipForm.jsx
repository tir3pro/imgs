import React from 'react';
import ReactDOM from 'react-dom';

import Coordinate from './Coordinate';
import Textarea from './Textarea';

class TooltipForm extends React.Component {
	render() {
		return (
			<div className="tooltip-container">
				<p>Please add tooltip coordinates and its text</p>
				<Coordinate
					coordinate="x"
					onCheck={this.props.onUpdateForm.bind(null, 'x')}
					error={this.props.errors.coordinate}
				  value={this.props.tooltip.x}
				/>
        <Coordinate
          coordinate="y"
          onCheck={this.props.onUpdateForm.bind(null, 'y')}
          error={this.props.errors.coordinate}
          value={this.props.tooltip.y}
        />
				<Textarea
					onCheck={this.props.onUpdateForm.bind(null, 'text')}
					error={this.props.errors.text}
				  value={this.props.tooltip.text}
				/>
			</div>
		);
	}
}

React.propTypes = {
	onUpdateForm: React.PropTypes.func.isRequired,
	errors: React.PropTypes.object.isRequired
};

export default TooltipForm;