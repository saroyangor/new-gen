import about from '../assets/about.png';
import { useTranslation } from 'react-i18next';

const texts = [
	{
		id: 1,
		title:
			'✨Our vision is to make the cultural life of Armenia more colorful and active by organizing unique and different projects.',
	},
	{
		id: 2,
		title:
			'The founder of the "NEW GENERATION" project is musician,docent of Arts Shmavon Grigoryan, who is known to music lovers for his many works, including Opera art in regions, Artsakh, border zones, "Orchestra+", "Concert in the foyer", "The fairy tale is calling", “Tete a Tete”, opera art in educational centers, etc.',
	},
	{
		id: 3,
		title:
			'The main goal of the "NEW GENERATION" project is to make the cultural life of Armenia even more colorful and active by organizing unique concerts.',
	},
	{
		id: 4,
		title:
			'🎶At the upcoming projects, we will host famous, recognized and loved artists, promoting the development of culture, why not providing positive energy and unforgettable moments. The projects will be diverse and unrepeated.',
	},
];

const About = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<section className="my-16">
			<h2 className="font-semibold text-[40px] mb-16">{t('About Us')}</h2>

			<article className="flex gap-6">
				<div className="flex flex-col gap-4">
					<h3 className="font-semibold text-2xl">{t('🆕Welcome to NEW GENERATION PROJECT!')}</h3>

					{texts.map((text) => (
						<p key={text.id} className="text-2xl">
							{t(text.title)}
						</p>
					))}
				</div>

				<img src={about} alt="About" />
			</article>
		</section>
	);
};

export default About;
