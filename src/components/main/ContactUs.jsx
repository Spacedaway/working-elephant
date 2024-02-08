import IdeasProcess from '../IdeasProcess';

function ContactUs() {
	return (
		<div className='contact-us | flow | text-center' id='Contact'>
			<h1 className='heading-9 | clr-neutral-000'>Contact us</h1>
			<h1 className='heading-1 | fs-900 clr-neutral-000'>
				{' '}
				{/* get in <span className='clr-accent-400'>touch!</span> */}
				Let's turn your project dream into a reality.
			</h1>
			<p className='fs-700 | clr-neutral-000'>
				Make it easy for potential clients to get in touch. Offer multiple contact options like phone, email, and contact form.
			</p>
			<div className='contact-us--form'>
				<form action=''>
					<input type='email' placeholder='Email' />
					<button className='button' data-type='accent'>
						Send Now
					</button>
				</form>
			</div>
			{/* <IdeasProcess /> */}
		</div>
	);
}

export default ContactUs;
