import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Logo from './Logo.tsx';

import eng from '../assets/eng.png';
import arm from '../assets/arm.png';
import { headerLinks as links } from '../data/db.json';

const languages = ['eng', 'arm'];

const Header = (): JSX.Element => {
	const { t, i18n } = useTranslation();

	return (
		<header className="py-6 flex justify-between items-center container max-w-[1216px] mx-auto">
			<Link to="/">
				<Logo width={139} height={64} fill={'#1C1B1F'} />
			</Link>

			<nav>
				<ul className="flex items-center gap-16">
					{links.map((link) => (
						<li key={link.title}>
							<NavLink to={link.link} className="text-xl">
								{t(link.title).toUpperCase()}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<div className="languages">
				<ul className="flex items-center gap-6">
					{languages.map((language) => (
						<li key={language}>
							<button onClick={() => i18n.changeLanguage(language)}>
								<img src={language === 'eng' ? eng : arm} alt={language} />
							</button>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
