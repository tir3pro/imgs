import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import images from './store/store';
import Navigation from './components/Navigation';
import List from './components/List';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: this.props.initialData
		}

		this.deleteImage = this.deleteImage.bind(this);
	}

	handleAdd() {
		debugger;
	}

	deleteImage(id) {
		let images = this.state.images.filter(image => image.id != id);

		this.setState({ images });
	}


	render() {
		return (
			<div>
				<Navigation onAdd={this.handleAdd}/>
				<List images={this.state.images} handleDelete={this.deleteImage}/>
			</div>
		);
	}
}

App.propTypes = {
	initialData: React.PropTypes.array.isRequired
};

ReactDOM.render(<App initialData={images} />, document.querySelector('#root'));