import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import images from './store/store';
import Navigation from './components/Navigation';
import List from './components/List';
import AddImage from './components/AddImage';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: this.props.initialData,
			isAddingFormVisible: false
		}

		this.deleteImage = this.deleteImage.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd() {
		this.setState({ 
			isAddingFormVisible: !this.state.isAddingFormVisible
		});
	}

	deleteImage(id) {
		let images = this.state.images.filter(image => image.id != id);

		this.setState({ images });
	}


	render() {
		return (
			<div>
				<Navigation onAdd={this.handleAdd}/>
				<AddImage isVisible={this.state.isAddingFormVisible} />
				<List images={this.state.images} handleDelete={this.deleteImage}/>
			</div>
		);
	}
}

App.propTypes = {
	initialData: React.PropTypes.array.isRequired
};

ReactDOM.render(<App initialData={images} />, document.querySelector('#root'));