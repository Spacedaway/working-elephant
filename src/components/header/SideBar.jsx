import React from 'react';
import logoBLUE from '../../assets/logo-Blue.png';
import sideImage from '../../assets/sidearea-img-1.png';
import downloadIOS from '../../assets/sidearea-img-2.png';
import downloadAndroid from '../../assets/sidearea-img-3.png';

function SideBar({ visible, toggleNav }) {
	return (
		<div className='sidebar | flow' data-open={visible ? 'true' : 'false'}>
			<button className='sidebar--close-btn' onClick={toggleNav}>
				&times;
			</button>
			<img width={166} src={logoBLUE} alt='' className='margin-4' />
			<p className='sidebar--text | text-center margin-4 | clr-neutral-400'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ratione
				recusandae provident ea quasi sunt officia doloremque at? Omnis,
				corporis!
			</p>
			<img src={sideImage} alt='' className='margin-4' />
			<div className='sidebar--downloads | margin-4'>
				<img width={184} src={downloadIOS} alt='' />
				<img width={184} src={downloadAndroid} alt='' />
			</div>
		</div>
	);
}

export default SideBar;
