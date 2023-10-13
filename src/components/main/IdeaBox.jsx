import React from 'react';

function IdeaBox({heading, percentage}) {
	return (
		<div className='idea--box'>
			<div className='ideas--content--describe'>
				<p className='clr-primary-400 fw-bold fs-500 | margin-block-end-4'>{heading}</p>

				<p className='clr-accent-400 fw-bold fs-500 | margin-block-end-4'>{percentage}%</p>
			</div>
			<div className='ideas--content--holder'>
				<div className='ideas--content' style={{width: percentage}}></div>
			</div>
		</div>
	);
}

export default IdeaBox;
