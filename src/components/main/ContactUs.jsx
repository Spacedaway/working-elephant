import IdeasProcess from '../IdeasProcess';

function ContactUs() {
	return (
		<div className='contact-us | flow | text-center'>
			<h1 className='heading-9 | clr-neutral-000'>Contact us</h1>
			<h1 className='heading-1 | fs-900 clr-neutral-000'>
				{' '}
				get in <span className='clr-accent-400'>touch!</span>
			</h1>
			<p className='fs-700 | clr-neutral-000'>
				Ready to elevate your tech game? We&apos;re here to chat, brainstorm,
				and turn your ideas into reality. Let&apos;s craft the future together.
			</p>
			<div className='contact-us--form'>
				<form action=''>
					<input type='email' placeholder='Email' />
					<button className='button' data-type='accent'>
						Send Now
					</button>
				</form>
			</div>
			<IdeasProcess />
		</div>
	);
}

export default ContactUs;
