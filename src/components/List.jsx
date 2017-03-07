import React from 'react';
import ReactDOM from 'react-dom';

import Image from './Image';

function List(props) {
	const images = props.images;

	return (
		<div className="images">
			{images.map(image => 
				<Image 
					title={image.title}
					id={image.id}
					key={image.id}
					src={image.src}
					tooltip={image.tooltip}
					onDelete={props.onDelete}
				/>)
			}
		</div>
	)
}

export default List;