import React from 'react';
import logoWhite from '/assets/logo-WHITE.png';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';

function FooterCol1() {
	return (
		<div className='footer-col | flow | margin-block-end-8'>
			<h1
				className='site-header--logo__regular | clr-neutral-000 | fs-600'
				height={27}
			>
				Working Elephant
			</h1>
			{/* <img src={logoWhite} alt='Footer logo' height={27} /> */}
			<p className='fs-500 clr-neutral-000'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt
			</p>
			<div className='footer-col--socials'>
				<a href='#'>
					<BiLogoFacebook />
				</a>
				<a href='#'>
					<BiLogoInstagram />
				</a>
				<a href='#'>
					<BiLogoTwitter />
				</a>
				<a href='#'>
					<BiLogoPinterestAlt />
				</a>
			</div>
		</div>
	);
}

export default FooterCol1;
