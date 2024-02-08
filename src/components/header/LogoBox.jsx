import logoWHITE from '/assets/logo_preview-white.png';
import logoBLACK from '/assets/logo_preview-black.png';

const LogoBox = ({ isScrolled }) => {
	return (
		<div
			className='site-header--logo'
			id='Home'
			data-scroll={isScrolled ? 'true' : 'false'}
		>
			<picture>
				<source
					media='(min-width: 992px)'
					srcSet={`${isScrolled ? logoBLACK : logoWHITE}`}
				/>
				<img height={150} src={logoBLACK} alt='logo image' />
			</picture>
		</div>
	);
};

export default LogoBox;
