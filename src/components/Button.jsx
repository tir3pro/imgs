import React from 'react';

function Button(props) {
	return (
		<button className={props.className} onClick={props.onClick}>{props.children}</button>
	);
}

Button.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default Button;