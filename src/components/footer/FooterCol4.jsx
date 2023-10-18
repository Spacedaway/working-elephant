import React from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

function FooterCol4() {
	return (
		<div className='footer-col | flow | margin-block-end-8'>
			<h1 className='fw-bold fs-600 clr-neutral-000'>Newsletter</h1>
			<div className='footer-col--form'>
				<form action=''>
					<div className='footer-col--form--container'>
						<input type='email' placeholder='Email' />
						<button className='button' data-type='accent'>
							<RiSendPlaneLine />
						</button>
					</div>
				</form>
			</div>
			<p className='fs-500 clr-neutral-000'>
				Get latest news and promotins direct in your inbox!
			</p>
		</div>
	);
}

export default FooterCol4;
