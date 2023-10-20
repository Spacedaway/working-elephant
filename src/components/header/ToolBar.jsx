import React from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { BiSolidCart } from 'react-icons/bi';

import QodeRED from '/assets/aside/qode-logo-RED.svg';
import QodeWHITE from '/assets/aside/qode-logo-WHITE.svg';
import { themes } from '../../utils/QodeThemes';

function ToolBar({ isToggled, handleToggle }) {
	return (
		<div className='toolbar' data-toggled={isToggled ? 'true' : 'false'}>
			<div
				className='toolbar--toggle toolbar--toggle__btn'
				onClick={handleToggle}
			>
				{isToggled ? (
					<BsArrowRight fontSize={20} color='#fff' />
				) : (
					<>
						<img height={26} src={QodeWHITE} alt='Qode Logo' />
						<p className='fw-bold uppercase | clr-neutral-000'>Related</p>
					</>
				)}
			</div>
			<div className='toolbar--toggle toolbar--toggle__buy-now'>
				{isToggled ? (
					// <BiSolidCart fontSize={20} color='#ee2b55' />
					<BiSolidCart fontSize={20} color='black' />
				) : (
					<>
						<BiSolidCart fontSize={26} color='black' />
						{/* <BiSolidCart fontSize={26} color='#ee2b55' /> */}
						<p className='fw-bold uppercase | clr-neutral-900'>Buy Now</p>
					</>
				)}
			</div>
			<div className='toolbar--box'>
				<div className='toolbar--header | margin-block-end-8'>
					<img height={40} src={QodeRED} alt='Qode Logo' />
					<p className='fw-bold'>Qode Interactive</p>
				</div>
				<div className='toolbar--themes'>
					<p className='margin-block-end-4 | fw-bold uppercase'>
						Related Themes
					</p>
					{themes.map((theme, index) => (
						<div key={index} className='toolbar--cards | margin-block-end-4'>
							<img className='toolbar--cards--img' src={theme.url} alt='' />
							<p className='toolbar--cards--name | fw-bold'>{theme.name}</p>
							<div className='toolbar--cards--details'>
								<p className='toolbar--cards--category | uppercase'>
									{theme.category}
								</p>
								<p className='price | fw-bold'>{theme.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<a href='#' className='toolbar-btn | fw-bold uppercase'>
				view all qode themes{' '}
				<BsArrow90DegUp
					className='margin-inline-start-4'
					style={{ transform: 'scaleX(-1)' }}
				/>
			</a>
		</div>
	);
}

export default ToolBar;
