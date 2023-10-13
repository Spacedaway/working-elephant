import React from 'react';
import FeatureBox from './FeatureBox';
import {MdOutlineSportsBasketball} from 'react-icons/md'
import {MdOutlineRocketLaunch} from 'react-icons/md'
import {LiaPhotoVideoSolid} from 'react-icons/lia'
import {IoGameControllerOutline} from 'react-icons/io5'

function Features() {
	return (
		<div className='features | container even-columns | text-center'>
			<FeatureBox heading='Great Design' icon={<MdOutlineSportsBasketball/>}/>
			<FeatureBox heading='Optimal Choice' icon={<MdOutlineRocketLaunch/>}/>
			<FeatureBox heading='Finest quality' icon={<LiaPhotoVideoSolid/>}/>
			<FeatureBox heading='Time saving' icon={<IoGameControllerOutline/>}/>
		</div>
	);
}

export default Features;
