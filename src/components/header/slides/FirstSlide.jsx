import React from 'react';

function FirstSlide() {
	return (
		<div className='image-slider--sliders'>
			<span className='slide--title | heading-9'>
				ceo engineer <span>01</span>
			</span>
			<h1 className='slide--heading | heading-1'>
				Teamwork is your key to <span>success</span>
			</h1>
			<p className='slide--text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit
				libero eaque. Cum, deserunt.
			</p>
			<div className='slide--buttons'>
				<a href='#' className='button' data-type='primary'>
					Get Working Elephant
				</a>
				<a href='#' className='button' data-type='accent'>
					Read More
				</a>
			</div>
		</div>
	);
}

export default FirstSlide;
