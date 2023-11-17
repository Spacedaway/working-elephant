import React from 'react';

import image1 from '/assets/h3-img-1.jpg';
import image2 from '/assets/h3-img-6.png';

function KickStarter() {
	return (
		<div
			className='middle-block | even-columns | box-shadow-5'
			data-type='kickstart'
		>
			<img src={image1} alt='' />
			<img src={image2} alt='' />
		</div>
	);
}

export default KickStarter;
