import React from 'react';

import Features from './Features';
import AmazingFuture from './AmazingFuture';
import GenerateIdeas from './GenerateIdeas';
import ContactUs from './ContactUs';
import OurTeam from './OurTeam';
import InfiniteScrollbar from './InfiniteScrollbar';

function MainSection() {
	return (
		<>
			<Features />
			<AmazingFuture />
			{/* <GenerateIdeas /> */}
			<ContactUs />
			<OurTeam />
			{/* <InfiniteScrollbar /> */}
		</>
	);
}

export default MainSection;
