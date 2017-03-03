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
			tooltips: []
		};

		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.addTooltip = this.addTooltip.bind(this);
	}

	nextId() {
		this._nextId = this._nextId || 5;
		return String(this._nextId++);
	}

	handleDelete(id) {
		let images = this.state.images.filter(image => image.id != id);

		this.setState({ images });
	}

	handleAdd(src) {
		let id = this.nextId();
		let image = {
			id,
			title: `Image ${id}`,
			src
		};

		let images = [...this.state.images, image];

		this.setState({ images });
	}

	addTooltip(settings) {
		this.setState({
			tooltips: this.state.tooltips.push(settings)
		});
		console.log(this.state.tooltips[0]);
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
								images,
								tooltips: this.state.tooltips,
								addTooltip: this.addTooltip,
								onAdd: this.handleAdd,
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