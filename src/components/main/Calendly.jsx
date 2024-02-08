import { PopupButton } from 'react-calendly';

export default function Calendly({ button }) {
	return (
		<>
			<PopupButton
				url='https://calendly.com/workingelephant/booking'
				rootElement={document.getElementById('root')}
				className='button'
				text={
					button ? 'Schedule a Call' : ' Schedule a call with Us via Calendly'
				}
			/>
		</>
	);
}
