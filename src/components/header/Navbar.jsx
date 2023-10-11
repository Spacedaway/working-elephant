import React, { useState } from 'react';

import useScreenSize from '../../hooks/useScreenSize';

import LogoBox from './LogoBox';
import Navigation from './Navigation';
import ToggleButton from './ToggleButton';
import IconBox from './IconBox';
import SideBar from './SideBar';

function Navbar() {
	const [isToggled, setIsToggled] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const [screenSize] = useScreenSize();

	const toggleNav = () => {
		if (screenSize.width <= 1040) {
			setIsToggled(!isToggled);
			setIsVisible(!isVisible);
		} else {
			setIsSidebarVisible(!isSidebarVisible);
		}
	};

	const toggleStyle = {
		transform: isToggled ? 'translateY(4.5rem) scaleY(100%)' : null,
	};

	return (
		<div className='site-header'>
			<div className='site-header__inner'>
				<LogoBox />
				<Navigation styles={toggleStyle} />
				<IconBox />
				<ToggleButton visible={isVisible} toggleNav={toggleNav} />
				<SideBar visible={isSidebarVisible} toggleNav={toggleNav} />
			</div>
		</div>
	);
}

export default Navbar;
