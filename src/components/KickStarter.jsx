import React from 'react';

import image1 from '/assets/h3-img-1.jpg';
import image2 from '/assets/h3-img-6.png';
import Banner from '/assets/banner.png';

function KickStarter() {
	return (
		<div
			className='middle-block | even-columns | box-shadow-5'
			data-type='kickstart'
		>
			<img src={image1} alt='' />
			<img src={Banner} alt='' className='kick_text' />
			{/* <div className='kick_text '>
				Schedule a free consultation and let's make your project elephant-sized awesome!
			</div> */}
		</div>
	);
}


export default KickStarter;
