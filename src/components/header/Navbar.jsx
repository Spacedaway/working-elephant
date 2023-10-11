import React, { useState, useEffect } from 'react';

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
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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
		<div className='site-header' data-scroll={scrolled ? 'true' : 'false'}>
			<div className='site-header__inner'>
				<LogoBox isScrolled={scrolled}/>
				<Navigation styles={toggleStyle} isScrolled={scrolled}/>
				<IconBox isScrolled={scrolled}/>
				<ToggleButton visible={isVisible} toggleNav={toggleNav} isScrolled={scrolled}/>
				<SideBar visible={isSidebarVisible} toggleNav={toggleNav} />
			</div>
		</div>
	);
}

export default Navbar;
