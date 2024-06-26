import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logoFooter from '../assets/LogoFooter.png';

const links = [
	{
		title: 'About',
		links: [
			{
				name: 'Our Story',
				link: '#',
			},
			{
				name: 'Careers',
				link: '#',
			},
			{
				name: 'Press',
				link: '#',
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				name: 'Return Policies',
				link: '#',
			},
			{
				name: 'FAQs',
				link: '#',
			},
			{
				name: 'Privacy Policy',
				link: '#',
			},
		],
	},
	{
		title: 'Connect',
		links: [
			{
				name: 'Instagram',
				link: '#',
			},
			{
				name: 'Facebook',
				link: '#',
			},
			{
				name: 'Telegram',
				link: '#',
			},
			{
				name: 'Threads',
				link: '#',
			},
			{
				name: 'Linkedin',
				link: '#',
			},
			{
				name: 'Youtube',
				link: '#',
			},
		],
	},
];

const Footer = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<footer className="bg-black text-white py-16">
			<div className="container max-w-[1216px] mx-auto flex justify-between items-start gap-[272px]">
				<img src={logoFooter} alt="Logo" />

				<section className="flex justify-between flex-grow">
					{links.map((link) => (
						<ul key={link.title}>
							<h3 className="font-semibold text-2xl mb-4">{t(link.title)}</h3>
							{link.links.map((link) => (
								<li className="py-2" key={link.name}>
									<Link to={link.link}>{t(link.name)}</Link>
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
