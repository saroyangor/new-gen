import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';

import ContactLogo from '../components/ContactLogo.tsx';
import useAlert from '../hooks/useAlert.tsx';
import { Alert } from '../components/Alert.tsx';

const ContactPage = (): JSX.Element => {
	const { t } = useTranslation();

	const formRef = useRef<HTMLFormElement>(null);
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const { alert, showAlert, hideAlert } = useAlert();

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();

		if (email === '') {
			return;
		}
		setLoading(true);

		emailjs
			.sendForm('service_7va11pg', 'template_pz6xj9h', formRef.current as HTMLFormElement, {
				publicKey: '-I5bsjY9fRNSpS-Fl',
			})
			.then(
				() => {
					setLoading(false);
					showAlert({
						show: true,
						text: 'Thank you for subscribing 😃',
						type: 'success',
					});
					formRef.current?.reset();

					setTimeout(() => {
						hideAlert(false);
					}, [3000]);
				},
				(error) => {
					setLoading(false);
					console.error(error);

					showAlert({
						show: true,
						text: 'Something went wrong, please try again 😢',
						type: 'danger',
					});
				},
			);
	};

	return (
		<article className="flex xl:gap-16 items-center xl:py-16 justify-between px-4 xl:px-0 my-6 xl:my-0">
			{alert.show && <Alert {...alert} />}
			<div className="flex flex-col gap-8 w-full">
				<div className="flex flex-col gap-6">
					<h2 className="xl:text-[40px] text-[32px]">{t('Contact us')}</h2>
					<p className="font-roboto">{t('Subscribe to stay informed and connected')}</p>
				</div>

				<form className="flex flex-col items-start xl:w-[500px] w-full gap-8" ref={formRef}>
					<input
						type="email"
						name="email"
						placeholder={t('Email Address')}
						className="border-b border-black p-4 w-full outline-0 font-roboto"
						onChange={(event) => setEmail(event.target.value)}
					/>
					<button
						className="bg-black text-white py-4 xl:px-16 w-full xl:w-fit xl:text-2xl text-base rounded-full"
						disabled={loading}
						onClick={handleSubmit}
					>
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
