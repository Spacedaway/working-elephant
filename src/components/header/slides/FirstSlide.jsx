import Calendly from "../../main/Calendly";

function FirstSlide() {
	return (
		<div className='image-slider--sliders'>
			<span className='slide--title | heading-9'>
				{/* ceo engineer <span>01</span> */}
			</span>
			<h1 className='slide--heading | heading-1'>
				{/* Teamwork is your key to <span>success</span> */}
				Imagine it. Dream it. Achieve it.
			</h1>
			<p className='slide--text'>
				Working Elephant helps you transform your wildest project ideas into tangible realities that leave a lasting impact.
			</p>
			<div className='slide--buttons hero_btn'>
				<Calendly button={true} />
				{/* <a href='#' className='button' data-type='primary'>
					Start Your Dream Project
				</a> */}
				{/* <a href='#' className='button' data-type='accent'>
					Read More
				</a> */}
			</div>
		</div>
	);
}

export default FirstSlide;
