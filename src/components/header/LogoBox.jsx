import logoWHITE from '../../../public/assets/logo-WHITE.png';
import logoBLUE from '../../../public/assets/logo-Blue.png';

const LogoBox = () => {
	return (
		<div className='site-header--logo'>
			<img
				src={logoWHITE}
				className='site-header--logo__regular'
				alt='logo'
				height={27}
			/>
			<img
				src={logoBLUE}
				className='site-header--logo__mobile'
				alt='logo'
				height={27}
			/>
		</div>
	);
};

export default LogoBox;
