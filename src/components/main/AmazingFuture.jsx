import people from '/assets/h3-img-2.jpg';
import Calendly from './Calendly';

function AmazingFuture() {
	return (
		<div className='even-columns | bg-neutral-100' style={{ '--grid-gap': 0 }}>
			<img src={people} alt='' />
			<div className='flow | padding-10' style={{ alignSelf: 'center' }}>
				<h1 className='heading-9'>CEO ENGINEER</h1>
				<h1 className='heading-1 clr-primary-400'>Amazing Future</h1>
				<p className='clr-neutral-500 fs-600'>
					Discover the forefront of possibilities in technology and consulting.
					Explore how we&apos;re shaping the future through seamless integration
					and groundbreaking solutions.
				</p>

				<Calendly button={true} />
			</div>
		</div>
	);
}

export default AmazingFuture;
