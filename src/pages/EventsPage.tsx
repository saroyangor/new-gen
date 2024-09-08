import { useTranslation } from 'react-i18next';

import Event from '../components/Event.tsx';
import { events } from '../data/db.json';

const EventsPage = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<section className="py-16">
			<h1 className="text-[64px] mb-16">{t('UPCOMING Events')}</h1>

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
