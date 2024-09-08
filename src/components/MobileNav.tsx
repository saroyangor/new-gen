import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BurgerMenu from './BurgerMenu.tsx';
import CloseButton from './CloseButton.tsx';

import { headerLinks as links } from '../data/db.json';

const MobileNav = (): JSX.Element => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <CloseButton /> : <BurgerMenu />}
			</button>
			{isOpen && (
				<ul className="w-full h-[calc(100vh-64px)] absolute z-10 top-16 left-0 bg-white flex flex-col gap-8 px-4 py-6">
					{links.map((link) => (
						<li key={link.title}>
							<NavLink onClick={() => setIsOpen(false)} to={link.link} className="text-xl">
								{t(link.title)}
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default MobileNav;
