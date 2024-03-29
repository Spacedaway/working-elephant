import { IoLocationOutline } from 'react-icons/io5';
import { BsPinAngle } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function FooterCol2() {
	return (
		<div className='footer-col | flow | margin-block-end-8'>
			<h1 className='fw-bold fs-600 clr-neutral-000'>Contact Info</h1>
			<div className='footer-col--contact'>
				<a>
					<IoLocationOutline />
					Monday to Friday: 9 AM - 8 PM
				</a>
				<a>
					<BsPinAngle />
					Saturday to Sunday: closed
				</a>
				<a href='mailto:support@workingelephant.com'>
					<AiOutlineMail />
					support@workingelephant.com
				</a>
				<a href='call:+17139666266'>
					<AiOutlinePhone />+ 171 3966 6266
				</a>
			</div>
		</div>
	);
}

export default FooterCol2;
