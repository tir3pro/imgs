import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Button from './Button';
import Tooltip from './Tooltip';
import images from '../store/store';

class Image extends React.Component {
	render() {
		return (
			<div className="images__image-wrap col-xs-12 col-sm-6 col-md-3">
				<p>{this.props.title}</p>
				<img key={this.props.id} id={this.props.id} src={this.props.src} />
				<Link to={`/edit-image/${this.props.id}`}>
					<Button className="button edit" onClick={this.handleEdit}>EDIT</Button>
				</Link>
				<Button className="button remove" onClick={() => this.props.onDelete(this.props.id)}>REMOVE</Button>
				{ this.props.tooltip && this.props.tooltip.x ? <Tooltip coordX={this.props.tooltip.x} coordY={this.props.tooltip.y} text={this.props.tooltip.text} /> : null }
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