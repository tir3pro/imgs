import React from 'react';

class Textarea extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="message">Add your text:</label>
				<textarea className="form-control" rows="5" onChange={this.props.onCheck} value={this.props.value}></textarea>
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
	onCheck: React.PropTypes.func.isRequired
};

export default Textarea;