import React from 'react';
import ReactDOM from 'react-dom';

import Component from './Component';
import './styles.styl';

function App() {
	return (
		<div>
			<h1>ReactApp</h1>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));