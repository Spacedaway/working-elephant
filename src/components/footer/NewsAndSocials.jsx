import React from 'react';
import FooterCol1 from './FooterCol1';
import FooterCol2 from './FooterCol2';
import FooterCol3 from './FooterCol3';
import FooterCol4 from './FooterCol4';

function NewsAndSocials() {
	return (
		<div className='news-socials | bg-primary-800 | padding-block-13'>
			<div className='news-socials--container | container grid-auto-fit' data-type='wide'>
                <FooterCol1/>
                <FooterCol2/>
                <FooterCol3/>
                <FooterCol4/>
            </div>
		</div>
	);
}

export default NewsAndSocials;
