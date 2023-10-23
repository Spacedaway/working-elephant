import logoWHITE from '/assets/logo-WHITE.png';
import logoBLUE from '/assets/logo-BLUE.png';

const LogoBox = ({ isScrolled }) => {
	return (
		<div
			className='site-header--logo'
			data-scroll={isScrolled ? 'true' : 'false'}
		>
			<h1 className='site-header--logo__regular | clr-neutral-000' height={27}>
				Working Elephant
			</h1>
			{/* <img
				src={logoWHITE}
				className='site-header--logo__regular'
				alt='logo'
				height={27}
			/> */}
			<h1 className='site-header--logo__mobile' height={27}>
				Working Elephant
			</h1>
			{/* <img
				src={logoBLUE}
				className='site-header--logo__mobile'
				alt='logo'
				height={27}
			/> */}
		</div>
	);
};

export default LogoBox;
