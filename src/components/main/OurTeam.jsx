import TeamCard from './TeamCard';

const teamMembers = [
	{
		role: 'Lead Designer',
		name: 'Holly Weston',
		description:
			'Passionate about crafting seamless user experiences and innovative designs.',
		image: '/assets/h3-team-1.jpg',
		ellipse: 'small',
	},
	{
		role: 'UX/UI Specialist',
		name: 'Ethan Clarke',
		description:
			'Dedicated to creating intuitive and visually stunning interfaces for optimal user engagement.',
		image: '/assets/h3-team-2.jpg',
		ellipse: 'large',
	},
	{
		role: 'Graphic Design Guru',
		name: 'Olivia Rodriguez',
		description:
			'Transforming ideas into captivating visuals that speak volumes and leave a lasting impression.',
		image: '/assets/h3-team-3.jpg',
		ellipse: 'small',
	},
	{
		role: 'Creative Visionary',
		name: 'Marcus Thompson',
		description:
			'Fusing artistry with technology to bring concepts to life in a way that captivates and inspires.',
		image: '/assets/h3-team-4.jpg',
		ellipse: 'large',
	},
];

function OurTeam() {
	return (
		<div className='team | bg-neutral-100'>
			<div
				className='team--container | container grid-auto-fit'
				data-type='wide'
			>
				{teamMembers.map((member) => (
					<TeamCard
						key={member.name}
						name={member.name}
						role={member.role}
						imageUrl={member.image}
						ellipse={member.ellipse}
						description={member.description}
					/>
				))}
			</div>
		</div>
	);
}

export default OurTeam;
