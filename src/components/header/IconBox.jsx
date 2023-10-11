import React from 'react';

import {BiShoppingBag} from 'react-icons/bi'
import {BiSearchAlt2} from 'react-icons/bi'

function IconBox() {
	return (
		<div className='iconbox'>
			<button type='button' className='iconbox-btn iconbox-btn__bag'>
				<BiShoppingBag />
				<span className="iconbox-btn__bag__count">0</span>
				<div className="iconbox-btn__bag__message">No Products in the cart.</div>
			</button>
			<button type='button' className='iconbox-btn'>
				<BiSearchAlt2 />
			</button>
		</div>
	);
}

export default IconBox;
