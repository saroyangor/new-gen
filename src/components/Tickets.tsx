import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../config/i18n.ts';

const Tickets = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<section className="text-center flex flex-col gap-6 items-center px-4 xl:px-0">
			<h1 className={i18n.language === 'eng' ? 'xl:text-[64px]' : 'xl:text-6xl' + ' text-[40px]'}>
				{t('WHERE STAGE MEETS SOUL!')}
			</h1>
			<p className="xl:text-2xl text-xl font-roboto">
				{t(
					'Our vision is to make the cultural life of Armenia more colorful by organizing unique events.',
				)}
			</p>
			<Link
				to="/events"
				className="bg-black text-white xl:py-6 py-3 xl:px-16 w-full xl:w-fit xl:text-2xl text-base rounded-full"
			>
				{t('Buy Tickets')}
			</Link>
		</section>
	);
};

export default Tickets;
