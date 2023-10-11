import React from 'react';
import Navbar from './Navbar';
import ImageSlider from './slides/ImageSlider';
import ToolBar from './ToolBar';

function HeaderSection() {
	return (
		<header>
			<Navbar />
			<ImageSlider/>
			<ToolBar/>
		</header>
	);
}

export default HeaderSection;
