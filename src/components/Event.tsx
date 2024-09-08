import { useTranslation } from 'react-i18next';

interface IEventProps {
	image: string;
	title: string;
	href: string;
	body: string[];
}

const Event = ({ image, title, href, body }: IEventProps): JSX.Element => {
	const { t } = useTranslation();

	return (
		<article className="flex flex-col xl:flex-row xl:gap-8 gap-6 xl:px-6 px-4 py-6 border border-black items-center">
			<img src={image} alt={title} className="w-80" />

			<div className="flex flex-col gap-6 items-start">
				<h3 className="font-medium text-[24px]">{t(title)}</h3>
				<div className="flex flex-col gap-6">
					{body.map((text) => (
						<p key={text} className="font-roboto whitespace-pre-line">
							{t(text)}
						</p>
					))}
				</div>
				<a
					target="_blank"
					href={href}
					className="bg-black text-white text-center py-4 xl:px-16 w-full xl:w-fit rounded-full"
				>
					{t('Buy Tickets')}
				</a>
			</div>
		</article>
	);
};

export default Event;
