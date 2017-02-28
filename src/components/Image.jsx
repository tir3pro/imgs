import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import images from '../store/store';

class Image extends React.Component {
	constructor(props) {
		super(props);

		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleEdit() {
		console.log('EDIT');
	}

	handleDelete(event, id) {
		console.log(event)
	}

	render() {
		return (
			<div className="images__image-wrap col-xs-12 col-sm-6 col-md-3">
				<p>{this.props.title}</p>
				<img key={this.props.id} id={this.props.id} src={this.props.src} />
				<Button className="button edit" onClick={this.handleEdit}>EDIT</Button>
				<Button className="button remove" onClick={() => this.props.onDelete(this.props.id)}>REMOVE</Button>
			</div>
		)
	}
}

Image.propTypes = {
	title: React.PropTypes.string.isRequired,
	id: React.PropTypes.string.isRequired,
	src: React.PropTypes.string.isRequired,
	onDelete: React.PropTypes.func
};

export default Image;