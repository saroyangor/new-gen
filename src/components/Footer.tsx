import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

import Logo from './Logo.tsx';

import { footerLinks as links } from '../data/db.json';

const Footer = ({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }): JSX.Element => {
	const { t } = useTranslation();

	const handleClick = (src: string): void => {
		if (src === links[0].links[0].link) {
			aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
		} else if (src === links[0].links[2].link || src === links[0].links[3].link) {
			window.scrollTo(0, 0);
		}
	};

	return (
		<footer className="bg-black text-white xl:py-16 py-8 xl:px-0 px-4">
			<div className="container xl:max-w-[1216px] mx-auto flex flex-col xl:flex-row justify-between items-start xl:gap-[272px] gap-8">
				<Logo width={isMobile ? 183 : 224} height={isMobile ? 84 : 104} fill={'white'} />

				<section className="flex flex-col xl:flex-row justify-between flex-grow">
					{links.map((link) => (
						<ul key={link.title} className="mb-8 xl:mb-0">
							<h3 className="font-semibold text-2xl mb-6 xl:mb-4">{t(link.title)}</h3>
							<div className="flex flex-col gap-4 xl:gap-0">
								{link.links.map((l) => (
									<li className="xl:py-2 font-roboto" key={l.name}>
										<Link
											onClick={() => handleClick(l.link)}
											to={l.link}
											target={link.title === 'Connect' || l.name === 'Careers' ? '_blank' : ''}
										>
											{t(l.name)}
										</Link>
									</li>
								))}
							</div>
						</ul>
					))}
				</section>
			</div>
		</footer>
	);
};

export default Footer;
