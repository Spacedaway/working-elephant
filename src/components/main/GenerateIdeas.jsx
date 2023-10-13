import React from 'react';

import phone from '../../assets/sidearea-img-1.png';

import IdeaBox from './IdeaBox';

function GenerateIdeas() {
	return (
		<div
			className='ideas | container even-columns | padding-block-start-13 padding-block-end-4'
			style={{ '--grid-gap': '2rem' }}
		>
			<div className='flow | margin-block-start-12'>
				<h1 className='heading-9'>CEO ENGINEER</h1>
				<h1 className='heading-1 | clr-primary-400 fs-800'>
					How to generate <br /> creative{' '}
					<span className='clr-accent-400'>ideas</span>
				</h1>
				<IdeaBox heading='Clarity' percentage={18} />
				<IdeaBox heading='Definition' percentage={36} />
				<IdeaBox heading='Resolution' percentage={58} />
			</div>
			<div className='ideas--img--box'>
				<img src={phone} alt='' height={505} className='ideas--img mx-auto' />
			</div>
		</div>
	);
}

export default GenerateIdeas;
