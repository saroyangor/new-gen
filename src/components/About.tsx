import { useTranslation } from 'react-i18next';

import { aboutTexts as texts } from '../data/db.json';

const About = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<section className="xl:my-16 my-6 px-4 xl:px-0">
			<h2 className="font-semibold xl:text-[40px] text-[32px] xl:mb-16 mb-6">{t('About Us')}</h2>

			<article className="flex gap-6 font-roboto">
				<div className="flex flex-col xl:gap-4 gap-3">
					{texts.map((text) => (
						<p key={text.id} className="xl:text-2xl text-base">
							{t(text.title)}
						</p>
					))}
				</div>
			</article>
		</section>
	);
};

export default About;
