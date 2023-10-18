import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoPinterestAlt } from 'react-icons/bi';

function TeamCard({ imageUrl, role, name, ellipse }) {
	return (
		<div className='team-card'>
			<div
				className='team-card--image--background | bg-neutral-000 | round'
				data-ellipse={ellipse}
			>
				<div className='team-card--image | round'>
					<img src={imageUrl} alt='Team Member' className='round' />
				</div>
			</div>
			<div className='team-card--description | flow | text-center'>
				<h1 className='heading-9 | clr-accent-400'>{role}</h1>
				<p className='fs-500 fw-bold clr-primary-400'>{name}</p>
				<p className='fs-400 clr-neutral-600'>
					Lorem ipsum dolor sit amet, consectetur adipisicing
				</p>
			</div>
			<div className='team-card--socials'>
				<BiLogoFacebook />
				<BiLogoTwitter />
				<BiLogoPinterestAlt />
			</div>
		</div>
	);
}

export default TeamCard;
