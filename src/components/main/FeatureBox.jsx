function FeatureBox({ heading, icon, text }) {
	return (
		<div className='feature-box | flow'>
			{icon}
			<h1 className='feature-box--heading | fs-600'>{heading}</h1>
			<p className='clr-neutral-400 fs-500'>{text}</p>
		</div>
	);
}

export default FeatureBox;
