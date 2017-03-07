import React from 'react';
import ReactDOM from 'react-dom';

class Tooltip extends React.Component {
	render() {
		return (
			<div className="tooltip" 
				style={{ left: `${this.props.coordX < 25 ? this.props.coordX + (25 - this.props.coordX) : this.props.coordX}px`, 
						top: `${this.props.coordY < 40 ? this.props.coordY + (40 - this.props.coordY) : this.props.coordY}px` }}>
				<a 	href="#">?</a>
				<p className="tooltip__text">{this.props.text}</p>
			</div>
		);
	}
}

export default Tooltip;