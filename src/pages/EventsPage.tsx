import { useTranslation } from 'react-i18next';

import Event from '../components/Event.tsx';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.jpg';

const events = [
	{
		image: event1,
		title: 'Queen Sensation',
		bodyEng: (
			<>
				<p>"Queen Sensation" is the real tribute of the world-renowned "Queen" band.</p>
				<p>
					And the first time, the show will continue in Armenia <b>on July 19 at 19:30</b> at the
					Demirchyan Sports and Concert Complex.
				</p>
				<p>Don't miss the chance to be a part of an unforgettable concert!</p>
				<a href="tel:+37495344305" className="w-fit">
					📲 095 344 304
				</a>
			</>
		),
		bodyArm: (
			<>
				<p>
					"Queen Sensation"-ը աշխարհահռչակ Queen խմբի երգերի լավագույն մատուցողն ու ավանդույթները
					շարունակողն է։
				</p>
				<p>
					Ու այս անգամ Շոուն շարունակվելու է ԱՌԱՋԻՆ ԱՆԳԱՄ Հայաստանում{' '}
					<b>հուլիսի 19-ին՝ ժամը 19:30-ին</b> Կարեն Դեմիրճյանի անվան մարզահամերգային համալիրում։
				</p>
				<p>Բաց չթողնեք բացառիկ համերգին նեկա լինելու հնարավորությունը:</p>
				<a href="tel:+37495344305" className="w-fit">
					📲 095 344 304
				</a>
			</>
		),
	},
	{
		image: event2,
		title: 'VIVALDI DJ',
		bodyEng: (
			<>
				<p>
					<b>Attention to all music lovers!</b>
				</p>
				<p>
					Experience a modern twist on Vivaldi's masterpiece, the "Four Seasons" with our exclusive
					DJ remix set like never before on <b>August 9, at 19:00!</b>
					<br />
					We blend classical elegance with contemporary beats.
				</p>
				<p>Don't miss out!</p>
			</>
		),
		bodyArm: (
			<>
				<p>
					<b>Ուշադրություն բոլոր երաժշտասերներին</b>
				</p>
				<p>
					Առաջին անգամ՝ ՆՈՐ ՆԱԽԱԳԻԾ. <b>Օգոստոսի 9-ին, ժամը 19:00-ին,</b> «Արամ Խաչատրյան»
					կամերգասրահում հնարավություն ունեք զգալու Վիվալդիի գլուխգործոց՝ «Տարվա եղանակները» բացառիկ
					DJ ռեմիքսով:
					<br />
					Մենք միաձուլել ենք դասական նրբագեղությունը ժամանակակից բիթերի հետ:
				</p>
				<p>Բաց մի թողեք</p>
			</>
		),
	},
	{
		image: event3,
		title: 'SONGS OF WHITNEY HUSTON featuring MASHA MNJOYAN',
		bodyEng: (
			<>
				<p>
					Legendary singer has made a historic performance. WHITNEY HOUSTON's immortal hits
					performed by Masha Mnjoyan.
				</p>
				<p>
					<b>October 26 | 19:00</b> at Aram Khachaturian Concert Hall
				</p>
			</>
		),
		bodyArm: (
			<>
				<p>
					Աշխարհի լեգենդար տաղանդը կերտել է պատմություն. ՈՒԻԹՆԻ ՀՅՈՒՍԹՈՆԻ անմահ հիթերը Մաշա Մնջոյանի
					կատարմամբ։
				</p>
				<p>
					<b>Հոկտեմբերի 26-ին՝ ժամը 19:00-ին</b> Արամ Խաչատրյան համերգասրահում։
				</p>
			</>
		),
	},
];

const EventsPage = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<section className="py-16">
			<h1 className="font-semibold text-[40px] mb-16">{t('UPCOMING Events')}</h1>

			<div className="flex flex-col gap-8">
				{events.map((event) => (
					<Event
						key={event.title}
						image={event.image}
						title={event.title}
						bodyEng={event.bodyEng}
						bodyArm={event.bodyArm}
					/>
				))}
			</div>
		</section>
	);
};

export default EventsPage;
