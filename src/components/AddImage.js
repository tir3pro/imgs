import React from 'react';
import ReactDOM from 'react-dom';

function AddImage(props) {
	return ( 
		<div className={props.isVisible ? 'show' : 'hidden'}>
			Some text
		</div>
	);
}

export default AddImage;