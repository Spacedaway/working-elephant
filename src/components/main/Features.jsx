import FeatureBox from './FeatureBox';
import { MdOutlineSportsBasketball } from 'react-icons/md';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { LiaPhotoVideoSolid } from 'react-icons/lia';
import { IoGameControllerOutline } from 'react-icons/io5';

const headings = [
	{
		title: 'Project Strategy & Planning',
		icon: <MdOutlineSportsBasketball />,
		text: 'Help clients define project scope, goals, timelines, and budgets.',
	},
	{
		title: 'Market Research & Analysis',
		icon: <MdOutlineRocketLaunch />,
		text: 'Conduct research to validate ideas, understand target markets, and inform project decisions.',
	},
	{
		title: 'Project Management & Execution',
		icon: <LiaPhotoVideoSolid />,
		text: 'Oversee project implementation, manage deliverables, and track progress.',
	},
	{
		title: 'Design & Development:',
		icon: <IoGameControllerOutline />,
		text: 'Offer design, development, and prototyping for physical or digital products.',
	},
];

function Features() {
	return (
		<div className='features |  even-columns | text-center |'>
			{headings.map((heading) => (
				<FeatureBox
					key={heading.title}
					heading={heading.title}
					icon={heading.icon}
					text={heading.text}
				/>
			))}
		</div>
	);
}

export default Features;
