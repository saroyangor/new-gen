import { useTranslation } from 'react-i18next';
import { MdOutlineMail } from 'react-icons/md';
import { MdOutlinePhone } from 'react-icons/md';

import contact from '../assets/contact.png';

const ContactPage = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<article className="flex gap-16 items-center py-16 justify-between">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-6">
					<h2 className="font-semibold text-[40px]">{t('Contact us')}</h2>
					<p>{t('Subscribe to stay informed and connected')}</p>
				</div>

				<form className="flex flex-col items-start w-[500px] gap-8">
					<input
						type="email"
						name="email"
						placeholder={t('Email Address')}
						className="border-b border-black py-4 px-0 w-full outline-0"
					/>
					<button className="py-4 px-16 font-bold border border-black">{t('Subscribe')}</button>
				</form>

				<div className="flex flex-col gap-6">
					<a href="mailto:newgenerationproject.arm@gmail.com" className="flex items-center gap-4">
						<MdOutlineMail className="text-2xl" />
						newgenerationproject.arm@gmail.com
					</a>
					<a href="tel:+374 95 344 304" className="flex items-center gap-4">
						<MdOutlinePhone className="text-2xl" />
						+374 95 344 304
					</a>
				</div>
			</div>
			<img src={contact} alt="contact" />
		</article>
	);
};

export default ContactPage;
