import React, { useEffect, useState } from 'react';
import image1 from '/assets/h2-client-h1.png';
import image2 from '/assets/h2-client-h2.png';
import image3 from '/assets/h2-client-h3.png';
import image4 from '/assets/h2-client-h4.png';
import image5 from '/assets/h2-client-h7.png';

function InfiniteScrollbar() {
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setShouldAnimate(!shouldAnimate);
		}
	}, []);

	return (
		<div
			className='infinite-scroller | container'
			data-type='full-bleed'
			data-animated={shouldAnimate}
		>
			<div className='infinite-scroller__inner'>
				<img src={image1} alt='' />
				<img src={image2} alt='' />
				<img src={image3} alt='' />
				<img src={image4} alt='' />
				<img src={image5} alt='' />
                {/* Content MUST be duplicated for infinite effect to take place. */}
                <img src={image1} alt='' />
				<img src={image2} alt='' />
				<img src={image3} alt='' />
				<img src={image4} alt='' />
				<img src={image5} alt='' />
			</div>
		</div>
	);
}

export default InfiniteScrollbar;
