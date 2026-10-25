import React from 'react';

export default function Die(props) {
	return (
		<button className={`die ${props.isHeld && 'held'}`} onClick={props.hold}>
			{props.value}
		</button>
	);
}
