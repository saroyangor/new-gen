import { useTranslation } from 'react-i18next';

const Tickets = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<section className="text-center flex flex-col gap-6 items-center">
			<h1 className="font-extrabold text-[64px]">{t('WHERE STAGE MEETS SOUL!')}</h1>
			<p className="text-2xl">
				{t(
					'Our vision is to make the cultural life of Armenia more colorful by organizing unique events.',
				)}
			</p>
			<button className="bg-black text-white py-6 px-16 text-2xl font-bold">
				{t('Buy Tickets')}
			</button>
		</section>
	);
};

export default Tickets;
