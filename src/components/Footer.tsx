import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Logo from './Logo.tsx';

import { footerLinks as links } from '../data/db.json';

const Footer = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<footer className="bg-black text-white py-16">
			<div className="container max-w-[1216px] mx-auto flex justify-between items-start gap-[272px]">
				<Logo width={224} height={104} fill={'white'} />

				<section className="flex justify-between flex-grow">
					{links.map((link) => (
						<ul key={link.title}>
							<h3 className="font-semibold text-2xl mb-4">{t(link.title)}</h3>
							{link.links.map((link) => (
								<li className="py-2 font-roboto" key={link.name}>
									<Link onClick={() => window.scrollTo(0, 0)} to={link.link}>
										{t(link.name)}
									</Link>
								</li>
							))}
						</ul>
					))}
				</section>
			</div>
		</footer>
	);
};

export default Footer;
