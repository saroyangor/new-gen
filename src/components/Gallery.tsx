import { useTranslation } from 'react-i18next';

import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';

const gallery = [
	{
		image: gallery1,
		title: 'Jazz Generation',
	},
	{
		image: gallery2,
		title: 'Jazz Generation #Christmas',
	},
	{
		image: gallery3,
		title: 'Malkhas Jazz',
	},
	{
		image: gallery4,
		title: 'Ethno Jazz',
	},
];

const Gallery = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<article className="my-16">
			<h2 className="font-semibold text-[40px] mb-16">Gallery</h2>

			<div className="flex gap-6 flex-wrap">
				{gallery.map((g) => (
					<div key={g.image}>
						<img src={g.image} alt={g.title} />
						<p className="text-2xl mt-6">{t(g.title)}</p>
					</div>
				))}
			</div>
		</article>
	);
};

export default Gallery;
