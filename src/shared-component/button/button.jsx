import React from 'react';
import { Link } from 'react-router-dom';

import './button.css';

const Button = (props) => {
	if (props.href) {
		return (
			<a
				className={`button button--${props.size || 'default'} `}
				href={props.href}
			>
				{props.children}
			</a>
		);
	}
	if (props.to) {
		return (
			<Link
				to={props.to}
				exact={props.exact}
				className={`button button--${props.size || 'default'}`}
			>
				{props.children}
			</Link>
		);
	}
	return (
		<button
			className={`button button--${props.size || 'default'} ${
				props.mode && 'button--mode'
			}`}
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
