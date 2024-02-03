import React, { useState } from 'react';
import Navbar from './Navbar';
import ImageSlider from './slides/ImageSlider';
import ToolBar from './ToolBar';
import KickStarter from '../KickStarter';

function HeaderSection() {
	const [isToggled, setIsToggled] = useState(false);

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};

	return (
		<header id='header'>
			<Navbar />
			<ImageSlider />
			{/* <ToolBar isToggled={isToggled} handleToggle={handleToggle} /> */}
			{/* <KickStarter /> */}
		</header>
	);
}

export default HeaderSection;
