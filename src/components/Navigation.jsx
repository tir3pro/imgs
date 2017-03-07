import React from 'react';

import Button from './Button';

class Navigation extends React.Component {
	render() {
		return(
			<div className="navigation">
				<Button className="create-btn" onClick={this.props.onCreate}>+</Button>
			</div>
		);
	}
}

export default Navigation;