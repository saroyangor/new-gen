import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

interface IEventProps {
	image: string;
	title: string;
	bodyEng: React.ReactNode;
	bodyArm: React.ReactNode;
}

const Event = ({ image, title, bodyEng, bodyArm }: IEventProps): JSX.Element => {
	const { t } = useTranslation();

	return (
		<article className="flex gap-8 p-6 border border-black items-center">
			<img src={image} alt={title} />
			<div className="flex flex-col gap-6 items-start">
				<h3 className="font-medium text-[32px]">{t(title)}</h3>
				<div className="flex flex-col gap-4">{i18next.language === 'eng' ? bodyEng : bodyArm}</div>
				<button className="bg-black text-white py-4 px-16 font-bold">{t('Buy Tickets')}</button>
			</div>
		</article>
	);
};

export default Event;
