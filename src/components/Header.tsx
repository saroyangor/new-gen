import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

import Logo from './Logo.tsx';

import { headerLinks as links } from '../data/db.json';
import MobileNav from './MobileNav.tsx';
import UsaFlag from './UsaFlag.tsx';
import ArmFlag from './ArmFlag.tsx';

const languages = ['eng', 'arm'];

const Header = (): JSX.Element => {
	const { t, i18n } = useTranslation();

	return (
		<header className="p-4 xl:py-6 flex justify-between items-center container xl:max-w-[1216px] mx-auto">
			<Link to="/">
				<Logo width={isMobile ? 69 : 139} height={isMobile ? 32 : 64} fill={'#1C1B1F'} />
			</Link>

			<nav>
				<ul className="hidden xl:flex items-center gap-16">
					{links.map((link) => (
						<li key={link.title}>
							<NavLink to={link.link} className={i18n.language === 'eng' ? 'text-xl' : 'text-base'}>
								{t(link.title)}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<div className="languages">
				<ul className="flex items-center xl:gap-6 gap-3">
					{languages.map((language) => (
						<li key={language} className="h-6">
							<button onClick={() => i18n.changeLanguage(language)}>
								{language === 'eng' ? <UsaFlag /> : <ArmFlag />}
							</button>
						</li>
					))}
					<li className="xl:hidden h-6 ml-3">
						<MobileNav />
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
