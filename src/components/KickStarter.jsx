import React from 'react';

import image1 from '../assets/h3-img-1.jpg';
import image2 from '../assets/h3-img-6.png';

function KickStarter() {
	return (
		<div className='kickstart | even-columns container | border-radius-2'>
			<img src={image1} alt='' />
			<img src={image2} alt='' />
		</div>
	);
}

export default KickStarter;
