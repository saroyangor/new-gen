import { useTranslation } from 'react-i18next';

import { aboutTexts as texts } from '../data/db.json';

const About = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<section className="my-16">
			<h2 className="font-semibold text-[40px] mb-16">{t('About Us')}</h2>

			<article className="flex gap-6 font-roboto">
				<div className="flex flex-col gap-4">
					{texts.map((text) => (
						<p key={text.id} className="text-2xl">
							{t(text.title)}
						</p>
					))}
				</div>
			</article>
		</section>
	);
};

export default About;
