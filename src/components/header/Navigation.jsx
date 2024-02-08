import { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';

import { navMenu } from '../../utils/NavMenuItems';

function Navigation({ styles, isScrolled, setIsToggled }) {
	const [activeItems, setActiveItems] = useState({});

	const handleClick = (
		index,
		subIndex = null,
		subSubMenuIndex = null,
		Name = null
	) => {
		setActiveItems((prevState) => {
			if (!subIndex && !subSubMenuIndex) {
				return {
					...prevState,
					[index]: !prevState[index],
				};
			} else if (subIndex && !subSubMenuIndex) {
				return {
					...prevState,
					[`${index}-${subIndex}`]: !prevState[`${index}-${subIndex}`],
				};
			} else if (subIndex && subSubMenuIndex) {
				return {
					...prevState,
					[`${index}-${subIndex}-${subSubMenuIndex}`]:
						!prevState[`${index}-${subIndex}-${subSubMenuIndex}`],
				};
			}
		});
		setIsToggled(false);
		const element = document.getElementById(Name);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<nav className='menu' style={styles}>
			<ul>
				{navMenu.map((item, index) => (
					<li
						className='dropdown dropdown__initial'
						key={index}
						onClick={() => handleClick(index, null, null, null, item.name)}
						data-active={activeItems[index] ? 'true' : 'false'}
					>
						<a
							href={`#${item.name}`}
							data-scroll={isScrolled ? 'true' : 'false'}
						>
							<span>{item.name}</span>
						</a>
						{/* <BiSolidChevronRight className='menu-arrow' /> */}
						{item.subMenu && item.subMenu.length > 0 && (
							<ul className={`${item.className}`}>
								{item.subMenu.map((subItem, subIndex) => (
									<li
										className='dropdown'
										key={subIndex}
										onClick={() => handleClick(index, subIndex)}
										data-active={
											activeItems[`${index}-${subIndex}`] ? 'true' : 'false'
										}
									>
										{typeof subItem === 'object' ? (
											<>
												<a href='#'>
													<span>{subItem.name}</span>
												</a>
												<BiSolidChevronRight />
												{subItem.subMenu && subItem.subMenu.length > 0 && (
													<ul className={`${subItem.className}`}>
														{subItem.subMenu.map(
															(subSubMenu, subSubMenuIndex) => (
																<li
																	key={subSubMenuIndex}
																	onClick={() =>
																		handleClick(
																			index,
																			subIndex,
																			subSubMenuIndex
																		)
																	}
																	data-active={
																		activeItems[
																			`${index}-${subIndex}-${subSubMenuIndex}`
																		]
																			? 'true'
																			: 'false'
																	}
																>
																	<a href='#'>
																		<span>{subSubMenu}</span>
																	</a>
																</li>
															)
														)}
													</ul>
												)}
											</>
										) : (
											<a href='#'>
												<span>{subItem}</span>
											</a>
										)}
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;
