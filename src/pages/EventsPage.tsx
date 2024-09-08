import { useTranslation } from 'react-i18next';

import Event from '../components/Event.tsx';
import { events } from '../data/db.json';

const EventsPage = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<section className="xl:py-16 pt-6 pb-8 px-4 xl:px-0">
			<h1 className="xl:text-[64px] text-2xl xl:mb-16 mb-6 text-black">{t('UPCOMING Events')}</h1>

			<div className="flex flex-col gap-8">
				{events.map((event: any) => (
					<Event
						key={event.title}
						image={event.image}
						title={event.title}
						body={event.body}
						href={event.link}
					/>
				))}
			</div>
		</section>
	);
};

export default EventsPage;
