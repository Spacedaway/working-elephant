import React from 'react';
import people from '../../assets/h3-img-2.jpg';

function AmazingFuture() {
	return (
		<div className='even-columns | bg-neutral-100' style={{'--grid-gap': 0}}>
			<img src={people} alt='' />
            <div className='flow | padding-10' style={{alignSelf: 'center'}}>
                <h1 className="heading-9">CEO ENGINEER</h1>
                <h1 className="heading-1 clr-primary-400">Amazing Future</h1>
                <p className='clr-neutral-500 fs-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <a data-type='accent' href="" className="button |">Read More</a>
            </div>
		</div>
	);
}

export default AmazingFuture;
