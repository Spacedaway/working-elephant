import React from 'react';
import TeamCard from './TeamCard';
import team1 from '/assets/h3-team-1.jpg';
import team2 from '/assets/h3-team-2.jpg';
import team3 from '/assets/h3-team-3.jpg';
import team4 from '/assets/h3-team-4.jpg';

function OurTeam() {
	return (
		<div className='team | bg-neutral-100'>
			<div className='team--container | container grid-auto-fit'>
				<TeamCard name='Holly Weston' role='designer' imageUrl={team1} ellipse='small'/>
				<TeamCard name='Holly Weston' role='designer' imageUrl={team2} ellipse='large' />
				<TeamCard name='Holly Weston' role='designer' imageUrl={team3} ellipse='small' />
				<TeamCard name='Holly Weston' role='designer' imageUrl={team4} ellipse='large' />
			</div>
		</div>
	);
}

export default OurTeam;
