import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ToTop() {
	return (
		<div className='to-top'>
			<a className='to-top--link' href='#header'>
				<FaArrowUp />
			</a>
		</div>
	);
}

export default ToTop;
