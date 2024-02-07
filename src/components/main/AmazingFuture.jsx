import people from '/assets/h3-img-2.jpg';
import Calendly from './Calendly';

function AmazingFuture() {
	return (
		<div className='even-columns | bg-neutral-100' style={{ '--grid-gap': 0 }} id="About">
			<img src={people} alt='' />
			<div className='flow | padding-10' style={{ alignSelf: 'center' }}>
				<h1 className='heading-9'>About Us</h1>
				<h1 className='heading-1 clr-primary-400'>Where Dreams Take Flight (and Land on Solid Ground)</h1>
				<p className='clr-neutral-500 fs-600'>
					Forget the dusty old image of stuffy consultants in ivory towers.
					Working Elephant is a different breed. We're a passionate herd of dream weavers,
					builders, and problem solvers, united by a single mission: to help your
					ideas take flight and land with a resounding <b>"wow</b>!"
				</p>

				<h3>Our story:</h3>

				<p>
					It all started with a napkin sketch and a shared dream of making the impossible possible. We saw a world where people weren't limited by resources, expertise, or the fear of taking that first step. We envisioned a place where dreams could be nurtured, shaped, and finally, brought to life. And so, Working Elephant was born.
					What makes us different?
					We're not just consultants, we're your project co-pilots. We climb aboard with you, sharing the excitement, navigating the bumps, and celebrating every milestone. We bring a unique blend of:

				</p>

				<Calendly button={true} />
			</div>
		</div>
	);
}

export default AmazingFuture;
