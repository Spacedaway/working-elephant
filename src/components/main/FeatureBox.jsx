import React from 'react';

function FeatureBox({ heading, icon }) {
	return (
		<div className='feature-box | flow'>
			{icon}
			<h1 className='feature-box--heading | fs-600'>{heading}</h1>
			<p className='clr-neutral-400 fs-500'>
				Lorem ipsum doloprs situs ametus consectetur adipi cingus elit do eius
			</p>
		</div>
	);
}

export default FeatureBox;
