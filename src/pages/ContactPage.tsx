import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';

import ContactLogo from '../components/ContactLogo.tsx';

const ContactPage = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<article className="flex xl:gap-16 items-center xl:py-16 justify-between px-4 xl:px-0 my-6 xl:my-0">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-6">
					<h2 className="xl:text-[40px] text-[32px]">{t('Contact us')}</h2>
					<p className="font-roboto">{t('Subscribe to stay informed and connected')}</p>
				</div>

				<form className="flex flex-col items-start xl:w-[500px] w-[calc(100vw-32px)] gap-8">
					<input
						type="email"
						name="email"
						placeholder={t('Email Address')}
						className="border-b border-black py-4 px-0 w-full outline-0 font-roboto"
					/>
					<button className="bg-black text-white py-4 xl:px-16 w-full xl:w-fit xl:text-2xl text-base rounded-full">
						{t('Subscribe')}
					</button>
				</form>

				<div className="flex flex-col gap-6">
					<a
						href="mailto:newgenerationproject.arm@gmail.com"
						className="flex items-center gap-4 font-roboto"
					>
						<MdOutlineMail className="text-2xl" />
						newgenerationproject.arm@gmail.com
					</a>
					<a href="tel:+374 95 344 304" className="flex items-center gap-4 font-roboto">
						<MdOutlinePhone className="text-2xl" />
						+374 95 344 304
					</a>
				</div>
			</div>
			{!isMobile && <ContactLogo />}
		</article>
	);
};

export default ContactPage;
