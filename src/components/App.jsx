import React from 'react';
import { Link } from 'react-router';

import Navigation from './Navigation';
import List from './List';
import images from '../store/store';
import '../style.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images,
		};

		this.handleAddImage = this.handleAddImage.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	nextId() {
		this._nextId = this._nextId || 5;
		return String(this._nextId++);
	}

	handleDelete(id) {
		let images = this.state.images.filter(image => image.id != id);

		this.setState({ images });
	}

	handleAddImage(src, tooltip, imageId) {
		let id = imageId ? imageId : this.nextId();
		let isEdited = null;
		let images;
		
		this.state.images.forEach((image, i) => {
			if (image.id === id) {
				isEdited = i;
			}
		});

		let image = {
			id,
			title: `Image ${id}`,
			src,
			tooltip
		};

		if (isEdited !== null && isEdited + 1) {
			this.state.images[isEdited] = image;
			images = this.state.images;

		} else {
			images = [...this.state.images, image];
		}
		
		this.setState({ images });
	}

	render() {
		return (
			<div>
				<Link to="/create-image">
					<Navigation onCreate={this.handleCreate} />
				</Link>
				<List images={this.state.images} onDelete={this.handleDelete} />
				{
					this.props.children &&
					React.cloneElement(
						this.props.children,
						Object.assign(
							{},
							this.props,
							{
								images: this.state.images,
								onAdd: this.handleAddImage,
								formState: this.params
							}
						)
					)
				}
			</div>
		);
	}
}

export default App;