import React from 'react';
import ReactDOM from 'react-dom';

class Tooltip extends React.Component {
	constructor(props) {
		super(props);
	}

	tooltipToggle() {
		$('[data-toggle="tooltip"]').tooltip();   	
	}

	render() {
		return (
			<div className="tooltip" style={{ left: `${this.props.coordX}px`, top: `${this.props.coordY}px` }}>
				<a 	href="#" data-toggle="tooltip" data-placement="top" title={this.props.text} onMouseOver={this.tooltipToggle} >?</a>
			</div>
		);
	}
}

export default Tooltip;