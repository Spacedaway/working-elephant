import idea from '/assets/h3-img-5-1.jpg';

function IdeasProcess() {
	return (
		<div
			className='middle-block | even-columns container | box-shadow-5'
			data-block='ideas'
			data-type='narrow'
		>

			<div className='mission | flow | padding-10'>
				<h1 className='heading-9'>IDEAS & PROCESS</h1>
				<h1 className='heading-1 | fs-800 clr-primary-400'>
					Mission <span className='clr-accent-400'>Accepted</span>
				</h1>
				<p className='fs-500 clr-neutral-300'>
					At the forefront of cutting-edge solutions, we strive to transform
					ideas into impactful realities. Our mission is to catalyze innovation,
					shaping a future where technology meets seamless functionality.
				</p>
				<div className='mission--count | text-center'>
					<div>
						<h1 className='heading-1 | fs-900 clr-primary-400'>745</h1>
						<span className='fs-600 fs-bold clr-accent-400'>Design Market</span>
					</div>
					<div>
						<h1 className='heading-1 | fs-900 clr-primary-400'>658</h1>
						<span className='fs-600 fs-bold clr-accent-400'>
							Worldwide Users
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IdeasProcess;
