import React from 'react';
import Qode from '/public/assets/aside/h2-client-1.svg';
import slide from '/public/assets/aside/00_preview.__large_preview (1).jpg';


function ToolBar() {
	return (
		<div className='toolbar'>
			<div className='toolbar-box'>
				<div className='toolbar--header'>
					<img src={Qode} alt='Qode Logo' />
					<p>Qode Interactive</p>
				</div>
				<div className='toolbar--themes'>
					<p>Related Themes</p>
					<div className='toolbar--cards'>
						<img className='toolbar--cards--img' src={slide} alt="" />
						<p className='toolbar--cards--name'>Becca</p>
						<div>
							<p className='toolbar--cards--category'>Technology</p>
							<p className="price">$85</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToolBar;
