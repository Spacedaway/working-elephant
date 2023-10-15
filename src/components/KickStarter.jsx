import React from 'react';

import image1 from '../assets/h3-img-1.jpg';
import image2 from '../assets/h3-img-6.png';

function KickStarter() {
	return (
		<div className='middle-block | even-columns container | margin-block-end-5 box-shadow-5'>
			<img src={image1} alt=''/>
			<img src={image2} alt=''/>
		</div>
	);
}

export default KickStarter;
