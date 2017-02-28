import React from 'react';

import Button from './Button';
import AddImage from './AddImage';

class Navigation extends React.Component {
	constructor(props) {
		super(props)
	}

	handleView() {
		console.log(111);
	}

	handleRemove(id) {
		let images = this.state.images.filter(image => id !== image.id);
		
	}

	render() {
		return(
			<div className="navigation">
				{/*<Button className="view" onClick={this.handleView}>VIEW</Button>*/}
				<Button className="create-btn" onClick={this.props.onCreate}>+</Button>
				{/*<Button className="edit" onClick={this.handleEdit}>EDIT</Button>
				<Button className="remove" onClick={this.handleRemove}>REMOVE</Button>*/}
			</div>
		);
	}
}

export default Navigation;