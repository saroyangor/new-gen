import { useTranslation } from 'react-i18next';

import Event from '../components/Event.tsx';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const events = [
	{
		image: event1,
		title: 'Charles Aznavour 100',
		bodyEng: (
			<>
				<p>
					Jubilee concert dedicated to the world Armenian
					<br />
					On June 8 at Aram Khachaturian Concert Hall will be presented "CHARLES AZNAVOUR 100"
					concert dedicated to the great chansonnier.
				</p>
				<p>
					<b>Soloist:</b> Ghassan Yammine
				</p>
				<p>
					<b>Pop-Symphonic Orchestra of the Public Radio of RA:</b> Artistic Director, People's
					Artist of RA Yervand Yerznkyan
				</p>
			</>
		),
		bodyArm: (
			<>
				<p>
					Համաշխարհային հայությանը նվիրված հոբելյանական համերգ
					<br />
					Հունիսի 8-ին Արամ Խաչատրյան համերգասրահում տեղի կունենա «ՇԱՐԼ ԱԶՆԱՎՈՒՐ 100» համերգը՝
					նվիրված մեծ շանսոնյեին։
				</p>
				<p>
					<b>Մենակատար՝</b> Ղասսան Յամմին
				</p>
				<p>
					<b>ՀՀ Հանրային ռադիոյի էստրադային սիմֆոնիկ նվագախումբ՝</b> գեղարվեստական ղեկավար, ՀՀ
					ժողովրդական արտիստ Երվանդ Երզնկյան
				</p>
			</>
		),
	},
	{
		image: event2,
		title: 'QUEEN Sensation',
		bodyEng: (
			<>
				<p>The show must go on!</p>
				<p>
					Freddie Mercury will be in the Sports and Concerts Complex named after Karen Demirchyan.
				</p>
				<p>
					Yes, yes you are not wrong. <b>On July 19, at 19:30,</b> the legendary Queen Sensation
					band will present the best hits of the world-famous band with the best interpretation.
				</p>
			</>
		),
		bodyArm: (
			<>
				<p>Շոուն պետք է շարունակվի!</p>
				<p>Ֆրեդի Մերկուրին կլինի Կարեն Դեմիրճյանի անվան մարզահամերգային համալիրում։</p>
				<p>
					Այո, այո, դուք չեք սխալվում։ <b>Հուլիսի 19-ին, ժամը 19:30</b> լեգենդար Queen Sensation
					խումբը կներկայացնի աշխարհահռչակ խմբի լավագույն հիթերը՝ լավագույն մեկնաբանությամբ։
				</p>
			</>
		),
	},
	{
		image: event3,
		title: 'Vivaldi DJ',
		bodyEng: (
			<>
				<p>
					<b>Attention to all music lovers!</b>
				</p>
				<p>
					New project for the first time. Experience a modern twist on Vivaldi's masterpiece, the
					"Four Seasons" with our exclusive DJ remix set like never before on{' '}
					<b>August 9, at 19:00!</b>
					<br />
					We blend classical elegance with contemporary beats.
				</p>
				<p>Don't miss out!</p>
			</>
		),
		bodyArm: (
			<>
				<p>
					<b>Ուշադրություն բոլոր երաժշտասերներին.</b>
				</p>
				<p>
					Առաջին անգամ նոր նախագիծ. <b>Օգոստոսի 9-ին, ժամը 19:00-ին,</b> մեր բացառիկ դիջեյի
					ռեմիքսով, ինչպես երբևէ, զգացեք ժամանակակից շրջադարձ Վիվալդիի գլուխգործոց «Չորս
					սեզոններ»-ում: Մենք համատեղում ենք դասական նրբագեղությունը ժամանակակից բիթերի հետ:
				</p>
				<p>Բաց մի թողեք</p>
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
