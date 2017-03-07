import React from 'react';

class Coordinate extends React.Component {
	render() {
		return (
			<div className="form-group">
				<input
					type="number"
					placeholder={`Enter coordinate ${this.props.coordinate}`}
					className="form-control"
					onChange={this.props.onCheck}
				  value={this.props.value}
				/>
        {
          	this.props.error ?
				<div className="alert alert-danger">
					<strong>{ this.props.error.message }</strong>
				</div> :
			null
        }
			</div>
		);
	}
}

React.propTypes = {
	coordinate: React.PropTypes.func.isRequired,
	onCheck: React.PropTypes.func.isRequired
};

export default Coordinate;