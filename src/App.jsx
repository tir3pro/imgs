import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import images from './store/store';
import Navigation from './components/Navigation';
import List from './components/List';
import CreateImage from './components/CreateImage';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: this.props.initialData,
			isAddingFormVisible: false
		}

		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleCreate = this.handleCreate.bind(this);
	}

	nextId() {
		this._nextId = this._nextId || 5;
		return String(this._nextId++);
	}

	handleCreate() {
		this.setState({ 
			isAddingFormVisible: !this.state.isAddingFormVisible
		});
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
		}

		let images = [...this.state.images, image];

		this.setState({ images });
	}

	render() {
		return (
			<div>
				<Navigation onCreate={this.handleCreate}/>
				<CreateImage isVisible={this.state.isAddingFormVisible} onAdd={this.handleAdd} images={images} />
				<List images={this.state.images} onDelete={this.handleDelete} />
			</div>
		);
	}
}

App.propTypes = {
	initialData: React.PropTypes.array.isRequired
};

ReactDOM.render(<App initialData={images} />, document.querySelector('#root'));