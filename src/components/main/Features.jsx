import FeatureBox from './FeatureBox';
import { MdOutlineSportsBasketball } from 'react-icons/md';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { LiaPhotoVideoSolid } from 'react-icons/lia';
import { IoGameControllerOutline } from 'react-icons/io5';

const headings = [
	{
		title: 'Great Design',
		icon: <MdOutlineSportsBasketball />,
		text: 'Unlock innovative strategies tailored to your needs.',
	},
	{
		title: 'Optimal Choice',
		icon: <MdOutlineRocketLaunch />,
		text: 'Make the right moves with solutions designed to optimize efficiency.',
	},
	{
		title: 'Finest Quality',
		icon: <LiaPhotoVideoSolid />,
		text: 'Experience unparalleled quality in our services.',
	},
	{
		title: 'Time Saving',
		icon: <IoGameControllerOutline />,
		text: 'Streamline your processes and maximize productivity with our solutions.',
	},
];

function Features() {
	return (
		<div className='features | container even-columns | text-center'>
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
